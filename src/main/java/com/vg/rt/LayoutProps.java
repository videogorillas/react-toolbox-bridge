package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;

@Namespace("ReactToolboxProps")
public class LayoutProps extends Props {

    /**
     * Additional class(es) for custom styling.
     */
    public String className;

    public LayoutProps(String key) {
        super(key);
    }

}
