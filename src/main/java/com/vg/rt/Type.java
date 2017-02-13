package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;

@Namespace("ReactToolbox")
public class Type {
    public Class type;
    public String title;

    public Type(Class type) {
        this.type = type;
    }

    public static Type typeWithTitle(Class type, String title) {
        Type t = new Type(type);
        t.title = title;
        return t;
    }
}
