package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;

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

    public AppBarProps setFixed(boolean fixed) {
        this.fixed = fixed;
        return this;
    }

    public AppBarProps setFlat(boolean flat) {
        this.flat = flat;
        return this;
    }
}
