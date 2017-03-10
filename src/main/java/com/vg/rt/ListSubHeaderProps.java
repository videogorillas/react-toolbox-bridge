package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;

@Namespace("ReactToolboxProps")
public class ListSubHeaderProps extends Props {
    public ListSubHeaderProps(String key) {
        super(key);
    }

    public String caption;
    
    public ListSubHeaderProps setCaption(String caption) {
        this.caption = caption;
        return this;
    }

    public ListSubHeaderProps setKey(String k) {
        key = k;
        return this;
    }
    
}
