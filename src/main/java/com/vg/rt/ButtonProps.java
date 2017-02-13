package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;
import org.stjs.javascript.dom.DOMEvent;
import org.stjs.javascript.functions.Callback1;

@Namespace("ReactToolbox")
public class ButtonProps extends Props {
    public ButtonProps(String key) {
        super(key);
    }

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
     * The text string to use for the type of the button.
     */
    private String type;
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

    public Callback1<DOMEvent> onClick;

    public boolean disabled;

    /**
     * If true, the neutral colors are inverted. Useful to put a button over a
     * dark background.
     */
    public Boolean inverse;

    public ButtonProps setInverse(Boolean inverse) {
        this.inverse = inverse;
        return this;
    }

    public ButtonProps setDisabled(boolean disabled) {
        this.disabled = disabled;
        return this;
    }

    /**
     * Value of the icon (See icon component).
     */
    public Object icon;

    public ButtonProps setRaised(boolean raised) {
        this.raised = raised;
        return this;
    }

    public ButtonProps setPrimary(boolean primary) {
        this.primary = primary;
        return this;
    }

    public ButtonProps setIcon(Object icon) {
        this.icon = icon;
        return this;
    }

    public ButtonProps setLabel(String label) {
        this.label = label;
        return this;
    }

    public ButtonProps setOnClick(Callback1<DOMEvent> onClick) {
        this.onClick = onClick;
        return this;
    }

    public ButtonProps setFloating(boolean floating) {
        this.floating = floating;
        return this;
    }

    public ButtonProps setFlat(boolean flat) {
        this.flat = flat;
        return this;
    }

    public ButtonProps setAccent(boolean accent) {
        this.accent = accent;
        return this;
    }

    

    public ButtonProps setType(String type) {
        this.type = type;
        return this;
    }

}
