package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;
import org.stjs.javascript.functions.Callback0;

@Namespace("ReactToolbox")
public class ButtonProps extends Props {
    /**
     * Indicates if the button should have accent color.
     * 
     * @default false
     */
    public boolean accent;
    /**
     * If true, the button will have a flat look.
     * 
     * @default false
     */
    public boolean flat;
    /**
     * If true, the button will have a floating look.
     * 
     * @default false
     */
    public boolean floating;
    /**
     * If specified, the button will be rendered as an <a>
     */
    public String href;
    /**
     * The text string to use for the name of the button.
     */
    public String label;
    /**
     * If true, component will be disabled and show a loading animation.
     * 
     * @default false
     */
    public boolean loading;
    /**
     * To be used with floating button. If true the button will be smaller.
     * 
     * @default false
     */
    public boolean mini;
    /**
     * Indicates if the button should have primary color.
     * 
     * @default false
     */
    public boolean primary;
    /**
     * If true, the button will have a raised look.
     * 
     * @default false
     */
    public boolean raised;
    /**
     * If true, component will have a ripple effect on click.
     * 
     * @default true
     */
    public boolean ripple;

    public Callback0 onClick;

    public boolean disabled;

    /**
     * Value of the icon (See icon component).
     */
    public Object icon;

}
