package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;
import org.stjs.javascript.dom.DOMEvent;
import org.stjs.javascript.functions.Callback1;

@Namespace("ReactToolboxProps")
public class LinkProps extends Props {

    /**
     * If {@code true}, adds active style to link.
     *
     * @default {@code false}
     */
    public boolean active;

    /**
     * Sets a custom class name to add styles to the link.
     *
     * @default {@code ""}
     */
    public String className;

    /**
     * Sets a count number.
     */
    public int count;

    /**
     * An icon key string to include a {@link com.vg.rt.FontIcon} component in
     * front of the text.
     */
    public String icon;

    /**
     * The text string used for the text content of the link.
     */
    public String label;

    public Callback1<DOMEvent> onClick;

    public LinkProps(String key) {
        super(key);
    }

    public LinkProps setLabel(String label) {
        this.label = label;
        return this;
    }
    
    public LinkProps setIcon(String icon) {
        this.icon = icon;
        return this;
    }

    public LinkProps setActive(Boolean active) {
        this.active = active;
        return this;
    }

    public LinkProps setOnClick(Callback1<DOMEvent> onClick) {
        this.onClick = onClick;
        return this;
    }
}
