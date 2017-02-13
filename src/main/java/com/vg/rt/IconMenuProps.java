package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;
import org.stjs.javascript.dom.DOMEvent;
import org.stjs.javascript.functions.Callback1;

@Namespace("ReactToolbox")
public class IconMenuProps extends Props {
    public IconMenuProps(String key) {
        super(key);
    }

    public Object icon;//String or Element   more_vert   Icon font key string or Element to display the opener icon.
    public Boolean iconRipple;//true    If true, the icon will show a ripple when is clicked.
    public Boolean menuRipple;//Boolean true    Transferred to the Menu component.
    public Callback1<DOMEvent> onClick;//Function        Callback that will be called when the icon is clicked.
    public Callback1<DOMEvent> onHide;//Function        Callback that will be called when the menu is being hidden.
    public Callback1<DOMEvent> onSelect; // Callback that will be invoked when a menu item is selected.
    public Callback1<DOMEvent> onShow; //Callback that will be invoked when the menu is being shown.
    public String position; //static  Determine the position of the menu. With static value the menu will be always shown, auto means that the it will decide the opening direction based on the current position. To force a position use topLeft, topRight, bottomLeft, bottomRight.
    public Boolean selectable; //false   If true, the menu will keep a value to highlight the active child item.
    public Object selected; //Used for selectable menus. Indicates the current selected value so the child item with this value can be highlighted.
    
    public IconMenuProps setIcon(Object icon) {
        this.icon = icon;
        return this;
    }
    
    public IconMenuProps setPosition(String position) {
        this.position = position;
        return this;
    }
    
    public IconMenuProps setMenuRipple(Boolean menuRipple) {
        this.menuRipple = menuRipple;
        return this;
    }
}
