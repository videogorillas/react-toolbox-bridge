package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;

@Namespace("ReactToolbox")
public class ListProps extends Props {
    public ListProps(String key) {
        super(key);
    }

    /**
     * If true, each element in the list will have a ripple effect on click
     * 
     * @default false
     */
    public boolean ripple;
    /**
     * If true, the elements in the list will display a hover effect and a
     * pointer cursor.
     * 
     * @default false
     */
    public boolean selectable;

    public ListProps setRipple(boolean ripple) {
        this.ripple = ripple;
        return this;
    }

    public ListProps setSelectable(boolean selectable) {
        this.selectable = selectable;
        return this;
    }
}
