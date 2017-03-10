package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;
import org.stjs.javascript.dom.DOMEvent;
import org.stjs.javascript.functions.Callback1;

@Namespace("ReactToolboxProps")
public class FontIconProps extends Props {
    /**
     * The key string for the icon you want be displayed.
     */
    public String value;
    private Callback1<DOMEvent> onClick;

    public FontIconProps setClassName(String className) {
        this.className = className;
        return this;
    }

    public FontIconProps setValue(String value) {
        this.value = value;
        return this;
    }

    public FontIconProps(String key) {
        super(key);
    }

    public FontIconProps setOnClick(Callback1<DOMEvent> cb) {
        this.onClick = cb;
        return this;
    }

    public FontIconProps setId(String id) {
        this.id = id;
        return this;
    }
}
