package com.vg.rt;

import org.stjs.javascript.Array;
import org.stjs.javascript.annotation.Namespace;

@Namespace("ReactToolbox")
public class NavigationProps extends Props {

    public static final String HORIZONTAL = "horizontal";
    public static final String VERTICAL = "vertical";

    /**
     * Type of the navigation, it can be {@code vertical} or {@code horizontal}.
     *
     * @default {@code horizontal}
     */
    public String type;

    /**
     * Array of objects that will be represented as {@link com.vg.rt.Button} so
     * the keys will be transferred as properties the Button Component.
     */
    public Array<ButtonProps> actions;

    /**
     * Array of objects similar to actions but that will be rendered as
     * {@link com.vg.rt.Link} component definition.
     */
    public Array<LinkProps> routes;

    public NavigationProps(String key) {
        super(key);
    }

    public NavigationProps setType(String type) {
        this.type = type;
        return this;
    }
}
