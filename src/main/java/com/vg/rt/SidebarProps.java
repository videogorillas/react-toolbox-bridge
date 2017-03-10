package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;

@Namespace("ReactToolboxProps")
public class SidebarProps extends Props {

    public SidebarProps(String key) {
        super(key);
    }

    /**
     * Set a class for the root component.
     *
     * @default ""
     */
    public String className;

    /** If true, the sidebar will vertically scroll all content. */
    public boolean scrollY;

    /**
     * If true, the sidebar will be pinned open.
     */
    public boolean pinned;

    /**
     * Width in standard increments (1-12) or percentage (25, 33, 50, 66, 75,
     * 100)
     * 
     * enum(1,2,3,4,5,6,7,8,9,10,11,12,25,33,50,66,75,100) 5
     */
    public int width;

    public SidebarProps setPinned(boolean pinned) {
        this.pinned = pinned;
        return this;
    }

}
