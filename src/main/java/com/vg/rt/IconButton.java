package com.vg.rt;

import org.stjs.bridge.react.Component;
import org.stjs.bridge.react.internal.ReactElement;
import org.stjs.bridge.react.internal.State;
import org.stjs.javascript.annotation.Namespace;
import org.stjs.javascript.annotation.Native;
import org.stjs.javascript.annotation.STJSBridge;

@STJSBridge
@Namespace("ReactToolbox")
public class IconButton extends Component<ButtonProps, State> {

    @Native
    public IconButton(ButtonProps props) {
        super(props);
    }

    @Override
    @Native
    public ReactElement<?> render() {
        throw new RuntimeException("TODO ReactClassInterface<ButtonProps,State>.render");
    }

}
