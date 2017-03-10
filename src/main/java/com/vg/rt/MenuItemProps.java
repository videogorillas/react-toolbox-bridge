package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;
import org.stjs.javascript.dom.DOMEvent;
import org.stjs.javascript.functions.Callback1;

@Namespace("ReactToolboxProps")
public class MenuItemProps extends Props {
    public MenuItemProps(String key) {
        super(key);
    }

    public String caption;//The text to include in the menu item. Required.
    public Boolean disabled;//false   If true, the item will be displayed as disabled and is not selectable.
    public Callback1<DOMEvent> onClick;//  Callback that will be called when Component is clicked.
    public Boolean selected;// false   Transferred from the Menu component for selectable menus. Indicates if it's the current active option.
    public String shortcut;//''  Displays shortcut text on the right side of the caption attribute.
    public Object icon; // String or Element       A key to identify an Icon from Material Design Icons or a custom Icon Element.

    public String value;

    public MenuItemProps setValue(String value) {
        this.value = value;
        return this;
    }

    public MenuItemProps setIcon(Object icon) {
        this.icon = icon;
        return this;
    }

    public MenuItemProps setCaption(String caption) {
        this.caption = caption;
        return this;
    }

    public MenuItemProps setSelected(Boolean selected) {
        this.selected = selected;
        return this;
    }

    public MenuItemProps setOnClick(Callback1<DOMEvent> onClick) {
        this.onClick = onClick;
        return this;
    }
}
