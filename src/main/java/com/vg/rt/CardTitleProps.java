package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;

@Namespace("ReactToolbox")
public class CardTitleProps extends Props {
    public CardTitleProps(String key) {
        super(key);
    }

    public Object avatar; //?: string | __React.ReactElement<any> | __React.ReactHTMLElement<any> | __React.ClassicComponent<any, any>,
    /**
     * Children to pass through the component.
     */
    public Object children; //?: any,
    /**
     * Sets a complementary smaller text under the title.
     */
    public String subtitle; //?: string,
    /**
     * Sets the title of the card.
     */
    public Object title; //?: string | boolean,

    public CardTitleProps setTitle(Object title) {
        this.title = title;
        return this;
    }

    public CardTitleProps setSubtitle(String subtitle) {
        this.subtitle = subtitle;
        return this;
    }

    public CardTitleProps setAvatar(Object urlOrElement) {
        this.avatar = urlOrElement;
        return this;
    }
    
    public CardTitleProps setChildren(Object children) {
        this.children = children;
        return this;
    }
    
}
