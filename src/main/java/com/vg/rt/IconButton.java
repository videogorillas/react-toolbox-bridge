package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;
import org.stjs.javascript.annotation.Native;
import org.stjs.javascript.annotation.STJSBridge;

@STJSBridge
@Namespace("ReactToolbox")
public class IconButton extends BaseComponent<ButtonProps> {

    @Native
    public IconButton(ButtonProps props) {
        super(props);
    }

}
