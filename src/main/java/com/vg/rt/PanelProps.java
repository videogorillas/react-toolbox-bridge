package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;

@Namespace("ReactToolbox")
public class PanelProps extends Props {

    public PanelProps(String key) {
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

    public PanelProps setScrollY(boolean scrollY) {
        this.scrollY = scrollY;
        return this;
    }

}
