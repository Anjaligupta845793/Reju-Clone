"use client";
import React from "react";
import { createContext, useState, useCallback } from "react";
import { toast } from "react-hot-toast";
import debounce from "lodash.debounce";
export const ProfileBuilderContext = createContext();

import axios from "axios";

export const ProfileBuilderProvider = ({ children }) => {
  const [formBtnloading, setformBtnloading] = useState(false);

  const [module, setmodule] = useState(null);

  const [profile, setprofile] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    coverimage: { url: "", id: "" },
    profileImage: { url: "", id: "" },
    displayNameOrLogo: undefined,
    displayName: true,
    displayLogo: false,
    displayTitle: "",
    displayLogoImage: {
      url: "",
      id: "",
    },
    themeType: "dark",
    theme: {
      cardColor: "",
      backgroundColor: "",
      TypographyAndIconColor: "",
      isImageBackground: false,
      moduleOverlay: "",
    },
    socialLinks: [],
    subscription: {
      status: "",
      plan: "",
      amount: 0,
    },
    modules: null,
  });

  const [CustomCardtheme, setCustomCardtheme] = useState({
    cardColor: "#000000",
    backgroundcolor: "#1d1d1d",
    TyprgraphyAndIconColor: "#FFFFFF",
    ModuleOverlay: "Light",
  });

  const lightThemeHandler = () => {
    setcolorTheme({
      cardColor: "#FFFFFF",
      backgroundcolor: "#e1e1e1",
      TyprgraphyAndIconColor: "#121212",
      ModuleOverlay: "Dark",
    });
    setlight(true);
    setdark(false);
    setcustom(false);
  };

  const darkThemeHandler = () => {
    setcolorTheme({
      cardColor: "#000000",
      backgroundcolor: "#1d1d1d",
      TyprgraphyAndIconColor: "#FFFFFF",
      ModuleOverlay: "Light",
    });
    setlight(false);
    setdark(true);
    setcustom(false);
  };

  const customThemeHandler = () => {
    setlight(false);
    setdark(false);
    setcustom(true);
    setcolorTheme({
      ...CustomCardtheme,
    });
  };

  const toggleDisplayButton = async (displayStatus) => {
    try {
      const response = await axios.post("/api/user/toggleDisplayButton", {
        displayStatus,
      });

      console.log("Response:", response.data);

      if (response.status === 200) {
        setprofile((prevProfile) => ({
          ...prevProfile,
          displayNameOrLogo: response.data.user.displayNameOrLogo,
        }));
      }
    } catch (error) {
      console.log("Error uploading profile picture:", error);
    }
  };

  const getRequestHandler = async () => {
    try {
      const response = await axios("/api/modules/get");
      const data = response.data.modules;

      setmodule(data);
    } catch (error) {
      console.log(error);
    }
  };

  const AddEventItemHandler = async (formdata, id) => {
    setformBtnloading(true);

    try {
      const data = await axios.post("/api/modules/additems/addEvent", formdata);
      console.log(data);

      const updatedModule = data.data.module;
      setmodule((prevmodule) =>
        prevmodule.map((mod) =>
          mod._id === id ? { ...mod, items: updatedModule.items } : mod
        )
      );

      setformBtnloading(false);
      toast.success("Item added successfully");
    } catch (error) {
      console.log("Error adding event item:", error);
      setformBtnloading(false);
      toast.error("Something went wrong, try again later");
    }
  };

  const AddLinkItemHandler = async (formdata, id) => {
    setformBtnloading(true);

    try {
      const data = await axios.post("/api/modules/additems/addLink", formdata);
      const updatedModule = data.data.module;

      // ✅ Step 4: Update state only if API call is successful
      setmodule((prevmodule) =>
        prevmodule.map((mod) =>
          mod._id === id ? { ...mod, items: updatedModule.items } : mod
        )
      );

      setformBtnloading(false);
      toast.success("Item added successfully");
    } catch (error) {
      console.log("Error adding link item:", error);
      setformBtnloading(false);
      toast.error("Something went wrong, try again later.");
    }
  };

  const AddProductItemHandler = async (formdata, id) => {
    setformBtnloading(true);

    // ✅ Step 3: Validate price to be a positive number
    if (isNaN(price) || price <= 0) {
      toast.error("Price must be a valid positive number.");
      setformBtnloading(false);
      return;
    }

    // ✅ Step 4: Validate URL format (if required for the product image or link)

    try {
      const data = await axios.post(
        "/api/modules/additems/addproduct",
        formdata
      );
      const updatedModule = data.data.module;

      setmodule((prevmodule) =>
        prevmodule.map((mod) =>
          mod._id === id ? { ...mod, items: updatedModule.items } : mod
        )
      );

      setformBtnloading(false);
      toast.success("Item added successfully");
    } catch (error) {
      console.log("Error adding product item:", error);
      setformBtnloading(false);
      toast.error("Something went wrong, try again later.");
    }
  };

  const AddThroneItemHandler = async (url) => {
    setformBtnloading(true);

    try {
      // Step 3: API call to create new Throne module
      const response = await axios.post("/api/modules/add", {
        type: "Throne Wishlist",
        FormType: "Link",
      });
      const id = response.data.module._id;

      // Step 4: API call to add Throne item with validated URL
      const data = await axios.post("/api/modules/additems/addThrone", {
        title: "Throne Wishlist",
        url,
        imageurl:
          "https://assets-global.website-files.com/651ed13529fb58a773686da0/651ed13529fb58a773686dd8_Throne_Icon_Square_White_on_Gradient.svg",
        id,
      });

      const updatedModule = data.data.module;
      setmodule((prevmodule) =>
        prevmodule.map((mod) =>
          mod._id === id ? { ...mod, items: updatedModule.items } : mod
        )
      );

      setformBtnloading(false);
      toast.success("Item added successfully!");
    } catch (error) {
      console.log("Error adding Throne item:", error);
      setformBtnloading(false);
      toast.error("Something went wrong, try again later.");
    }
  };
  const AddYouTubeItemHandler = async (id, url) => {
    setformBtnloading(true);

    try {
      // Step 3: API call to add YouTube item
      const response = await axios.post("/api/modules/additems/addVideo", {
        id,
        url,
      });

      const updatedModule = response.data.module;
      setmodule((prevmodule) =>
        prevmodule.map((mod) =>
          mod._id === id ? { ...mod, items: updatedModule.items } : mod
        )
      );

      setformBtnloading(false);
      toast.success("Item added successfully!");
    } catch (error) {
      console.log("Error adding YouTube item:", error);
      setformBtnloading(false);
      toast.error("Something went wrong, try again later.");
    }
  };

  const moduleDeleteHandler = async (id) => {
    try {
      const response = await axios.delete(`/api/modules/${id}`);

      setmodule((prevmodule) => prevmodule.filter((mod) => mod._id !== id));

      toast.success("module deleted successfully!");
    } catch (error) {
      console.log("Error removing model:", error);

      toast.error("Something went wrong, try again later.");
    }
  };

  const itemDeleteHandler = async (id, itemid) => {
    try {
      const response = await axios.delete(
        `/api/modules/${id}/itemid/${itemid}`
      );

      setmodule((prevModules) =>
        prevModules.map((mod) =>
          mod._id === id
            ? {
                ...mod,
                items: mod.items.filter((item) => item._id !== itemid),
              }
            : mod
        )
      );
      console.log(response);
      toast.success("item deleted successfully!");
    } catch (error) {
      console.log("Error removing model:", error);

      toast.error("Something went wrong, try again later.");
    }
  };

  const toggleVisibility = async (id, visible) => {
    try {
      const response = await axios.patch(`/api/modules/${id}`, {
        visible: !visible,
      });

      setmodules((prevModules) =>
        prevModules.map((mod) =>
          mod._id === id ? { ...mod, visible: !mod.visible } : mod
        )
      );

      toast.success("Visibility updated successfully!");
    } catch (error) {
      console.error("Error toggling visibility:", error);
      toast.error("Something went wrong, try again later.");
    }
  };
  const toggleItemVisibility = async (id, itemid, currentVisibility) => {
    try {
      const response = await axios.patch(
        `/api/modules/${id}/itemid/${itemid}`,
        {
          visible: !currentVisibility,
        }
      );

      const updatedItem = response.data.module.items.find(
        (item) => item._id === itemid
      );

      setmodule((prevModules) =>
        prevModules.map((mod) =>
          mod._id === id
            ? {
                ...mod,
                items: mod.items.map((item) =>
                  item._id === itemid
                    ? { ...item, visible: updatedItem.visible }
                    : item
                ),
              }
            : mod
        )
      );

      toast.success("Visibility updated successfully!");
    } catch (error) {
      console.error("Error updating visibility:", error);
      toast.error("Something went wrong, try again later.");
    }
  };
  const fetchUser = async () => {
    try {
      const response = await axios.get("/api/user");
      console.log(response.data.user);
      if (response.data) {
        setprofile((prev) => ({
          ...prev,
          ...response.data.user, // Merge API response with existing structure
        }));
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  const updateProfilePic = async (image) => {
    try {
      const formData = new FormData();
      console.log("image", image);

      formData.append("image", image);
      formData.append("id", profile.id);

      const response = await axios.post("/api/user/updateProfile", formData);

      console.log("Response:", response.data);

      if (response.status === 200) {
        setprofile((prevProfile) => ({
          ...prevProfile,
          profileImage: response.data.user.profileImage,
        }));
      }
    } catch (error) {
      console.log("Error uploading profile picture:", error);
    }
  };
  const updateCoverPic = async (image) => {
    try {
      const formData = new FormData();
      console.log("image", image);

      formData.append("image", image);

      const response = await axios.post("/api/user/updateCover", formData);

      console.log("Response:", response.data);

      if (response.status === 200) {
        setprofile((prevProfile) => ({
          ...prevProfile,
          coverimage: response.data.user.coverimage,
        }));
      }
    } catch (error) {
      console.log("Error uploading profile picture:", error);
    }
  };
  const updateText = useCallback(
    debounce(async (text) => {
      try {
        const response = await axios.post("/api/user/updateText", {
          text,
        });

        console.log("Response:", response.data);

        if (response.status === 200) {
          setprofile((prevProfile) => ({
            ...prevProfile,
            displayName: response.data.user.displayName,
            displayLogo: response.data.user.displayLogo,
            displayTitle: response.data.user.displayTitle,
          }));
        }
      } catch (error) {
        console.log("Error uploading text:", error);
      }
    }, 1000), // Debounce time set to 1000ms (1 second)
    []
  );

  const updateLogo = async (image) => {
    try {
      const formdata = new FormData();
      formdata.append("image", image);
      const response = await axios.post("/api/user/updateLogo", formdata);

      console.log("Response:", response.data);

      if (response.status === 200) {
        setprofile((prevProfile) => ({
          ...prevProfile,
          displayName: response.data.user.displayName,
          displayLogo: response.data.user.displayLogo,
          displayLogoImage: {
            url: response.data.user.displayLogoImage.url,
            id: response.data.user.displayLogoImage.id,
          },
        }));
      }
    } catch (error) {
      console.log("Error uploading profile picture:", error);
    }
  };
  const toggleTextLogo = async (type) => {
    try {
      const response = await axios.post("/api/user/toggleTextLogo", { type });

      console.log("Response:", response.data);

      if (response.status === 200) {
        setprofile((prevProfile) => ({
          ...prevProfile,
          displayName: response.data.user.displayName,
          displayLogo: response.data.user.displayLogo,
        }));
      }
    } catch (error) {
      console.log("Error uploading profile picture:", error);
    }
  };
  const updateThemeType = async (type) => {
    try {
      setprofile((prevProfile) => ({
        ...prevProfile,
        themeType: type,
      }));
      const response = await axios.post("/api/user/updateTheme", { type });

      console.log("Response:", response.data);
    } catch (error) {
      console.log("Error uploading profile picture:", error);
    }
  };
  const changeTheme = useCallback(
    debounce(async (field, value) => {
      try {
        debounce(async (field, value) => {
          try {
            setprofile((prevProfile) => ({
              ...prevProfile, // Corrected variable name here
              theme: {
                ...prevProfile.theme,
                [field]: value,
              },
            }));
          } catch (error) {
            console.log("Error in debounced function:", error);
          }
        }, 500);

        const response = await axios.post("/api/user/changeTheme", {
          field,
          value,
        });

        console.log("Response:", response.data);
      } catch (error) {
        console.log("Error updating theme:", error);
      }
    }, 500), // 500ms delay
    []
  );

  return (
    <ProfileBuilderContext.Provider
      value={{
        getRequestHandler,
        module,
        setmodule,
        updateProfilePic,
        lightThemeHandler,
        darkThemeHandler,
        customThemeHandler,
        AddEventItemHandler,
        AddLinkItemHandler,
        AddProductItemHandler,
        AddThroneItemHandler,
        AddYouTubeItemHandler,
        moduleDeleteHandler,
        formBtnloading,
        itemDeleteHandler,
        toggleVisibility,
        toggleItemVisibility,
        fetchUser,
        profile,
        updateCoverPic,
        toggleDisplayButton,
        updateText,
        updateLogo,
        setprofile,
        toggleTextLogo,
        updateThemeType,
        changeTheme,
      }}
    >
      {children}
    </ProfileBuilderContext.Provider>
  );
};
