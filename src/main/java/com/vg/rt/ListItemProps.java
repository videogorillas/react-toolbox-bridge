package com.vg.rt;

import org.stjs.bridge.react.internal.ReactElement;
import org.stjs.javascript.Array;
import org.stjs.javascript.functions.Callback0;

public class ListItemProps extends Props {
    /**
     * A string URL to specify an avatar in the left side of the item.
     */
    public String avatar;
    /**
     * Main text of the item. Required.
     */
    public String caption;
    /**
     * An element that will be displayed as the item. If set, this will override
     * `caption` and `legend`.
     */
    public ReactElement itemContent;
    /**
     * A list of elements that are placed on the left side of the item and after
     * the avatar attribute.
     */
    public Array<ReactElement> leftActions;
    /**
     * A string key of a font icon to display an icon in the left side of the
     * item.
     */
    public String leftIcon;
    /**
     * Secondary text to display under the caption.
     */
    public String legend;
    /**
     * A list of elements that are placed on the right side of the item and
     * after the rightIcon attribute.
     */
    public Array<ReactElement> rightActions;
    /**
     * The same as the leftIcon but in this case the icon is displayed in the
     * right side.
     */
    public String rightIcon;
    /**
     * If true, the item displays a ripple effect on click. By default it's
     * inherited from the parent element.
     * 
     * @default false
     */
    public boolean ripple;
    /**
     * If true, the elements in the list will display a hover effect and a
     * pointer cursor. Inherited from the parent
     * 
     * @default false
     */
    public boolean selectable;
    /**
     * In case you want to provide the item as a link, you can pass this
     * property to specify the href.
     */
    public String to;
    

    public Callback0 onClick;

    public boolean disabled;

}
