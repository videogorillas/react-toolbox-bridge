package com.vg.rt;

import org.stjs.javascript.Array;
import org.stjs.javascript.annotation.Namespace;
import org.stjs.javascript.functions.Callback0;

@Namespace("ReactToolbox")
public class CardProps extends Props {
    public CardProps(String key) {
        super(key);
    }

    /**
     * Child components, usually Card subcomponents.
     */
    public Object children;
    /**
     * Increases the shadow depth to appear elevated.
     */
    public boolean raised;
    /**
     * Array of objects describing actions. These actions will be rendered as
     * buttons and the object fields will be transferred to those.
     * 
     * @default []
     */
    public Array<ButtonProps> actions;
    /**
     * Sets HEX or RGBA color to add a colored layer to the heading.
     */
    public String color;
    /**
     * URL to set as a background image in the heading.
     */
    public String image;

    /**
     * Type of the component to display general modifications. It can be 'wide'
     * for a larger card, 'image' if it's an image card or 'event' which shows
     * just a title on top.
     */
    public String type;

    public Callback0 onClick;

    public CardProps setType(String type) {
        this.type = type;
        return this;
    }

}
