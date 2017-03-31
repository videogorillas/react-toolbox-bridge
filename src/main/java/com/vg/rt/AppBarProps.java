package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;
import org.stjs.javascript.dom.DOMEvent;
import org.stjs.javascript.functions.Callback1;

@Namespace("ReactToolboxProps")
public class AppBarProps extends Props {

    public AppBarProps(String key) {
        super(key);
    }

    /**
     * Set a class for the root component.
     *
     * @default ""
     */
    public String className;

    /**
     * Determine if the bar should have position {@code fixed} or {@code relative}
     *
     * @default false
     */
    public boolean fixed;

    /**
     * If {@code true}, the AppBar shows a shadow.
     *
     * @default false
     */
    public boolean flat;

    /**
     * 	Title used for the appbar.
     * 	@default null
     */
    public String title;

    /**
     * Appbar left icon
     * 
     * @default Element
     */
    public String leftIcon;

    /**
     * Called on left icon click event
     * @default null
     */
    public Callback1<DOMEvent> onLeftIconClick;

    /**
     * Right icon.
     * @default null
     */
    public String rightIcon;

    /**
     * 	Called on right icon click event
     * 	@default null
     */
    public Callback1<DOMEvent> onRightIconClick;

    /**
     * Whether AppBar should be hidden during scroll
     * @default false
     */
    public boolean scrollHide;


    public AppBarProps setLeftIcon(String leftIcon) {
        this.leftIcon = leftIcon;
        return this;
    }

    public AppBarProps setRightIcon(String rightIcon) {
        this.rightIcon = rightIcon;
        return this;
    }

    public AppBarProps setScrollHide(boolean scrollHide) {
        this.scrollHide = scrollHide;
        return this;
    }

    public AppBarProps setFixed(boolean fixed) {
        this.fixed = fixed;
        return this;
    }

    public AppBarProps setFlat(boolean flat) {
        this.flat = flat;
        return this;
    }
}
