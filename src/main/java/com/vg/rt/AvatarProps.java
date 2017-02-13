package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;

@Namespace("ReactToolbox")
public class AvatarProps extends Props {
    public AvatarProps(String key) {
        super(key);
    }

//    children    Node        Children for the avatar. You can pass an SVG for a custom icon or, for example, an image.
    public String className; //   String  ''  Set a class to style the Component.
    public Boolean cover; //   Boolean ''  Set to true if your image is not squared so it will be used as a cover for the element.
    public Object icon; // String or Element       A key to identify an Icon from Material Design Icons or a custom Icon Element.
    public Object image; //String or Element       An image source or an image element.
    public String title; //''  A title for the image. If no image is provided, the first letter will be displayed as the avatar.
    public Object theme; //null    Classnames object defining the component style.

    public AvatarProps setIcon(Object icon) {
        this.icon = icon;
        return this;
    }

    public AvatarProps setTitle(String title) {
        this.title = title;
        return this;
    }

    public AvatarProps setImage(Object image) {
        this.image = image;
        return this;
    }
    
    public AvatarProps setCover(Boolean cover) {
        this.cover = cover;
        return this;
    }

}
