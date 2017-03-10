package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;
import org.stjs.javascript.dom.DOMEvent;
import org.stjs.javascript.functions.Callback1;

@Namespace("ReactToolboxProps")
public class MenuProps extends Props {
    public MenuProps(String key) {
        super(key);
    }

    public Boolean active;//false   If true, the menu will be displayed as opened by default.
    public Callback1<DOMEvent> onHide;//Function        Callback that will be called when the menu is being hidden.
    public Callback1<DOMEvent> onSelect; // Callback that will be invoked when a menu item is selected.
    public Callback1<DOMEvent> onShow; //Callback that will be invoked when the menu is being shown.
    public Boolean outline;//true    If true the menu wrapper will show an outline with a soft shadow.
    public String position; //static  Determine the position of the menu. With static value the menu will be always shown, auto means that the it will decide the opening direction based on the current position. To force a position use topLeft, topRight, bottomLeft, bottomRight.
    public Boolean ripple;//true    If true, the menu items will show a ripple effect on click.
    public Boolean selectable; //false   If true, the menu will keep a value to highlight the active child item.
    public Object selected; //Used for selectable menus. Indicates the current selected value so the child item with this value can be highlighted.

}
