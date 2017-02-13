package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;

@Namespace("ReactToolbox")
public class ListDividerProps extends Props {
    public ListDividerProps(String key) {
        super(key);
    }

    /**
     * Indicates if the divider should be full width or should leave a space on
     * the left side.
     */
    public boolean inset;

}
