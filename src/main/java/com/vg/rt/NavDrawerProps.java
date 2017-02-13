package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;
import org.stjs.javascript.dom.DOMEvent;
import org.stjs.javascript.functions.Callback1;

@Namespace("ReactToolbox")
public class NavDrawerProps extends Props {

    public NavDrawerProps(String key) {
        super(key);
    }

    /**
     * Set a class for the root component.
     *
     * @default ""
     */
    public String className;

    /** If true, the panel will vertically scroll all content. */
    public boolean scrollY;

    /**
     * enum('normal','wide') normal 320px or 400px. Only applicable above the sm
     * breakpoint.
     */
    public String width;

    /**
     * If true, the drawer will be shown as an overlay.
     */
    public boolean active;

    /**
     * If true, the drawer will be pinned open. pinned takes precedence over
     * active.
     */
    public boolean pinned;

    /**
     * The breakpoint at which the drawer is automatically pinned.
     * enum('sm','md','lg','xl','xxl','xxxl')
     */
    public String permanentAt;

    /**
     * Callback function to be invoked when the overlay is clicked.
     */
    public Callback1<DOMEvent> onOverlayClick; //Function        
}
