package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;

@Namespace("ReactToolbox")
public class Props {
    /**
     * Sets a CSS class on the component.
     */
    public String className;
    public String id;
    /**
     * A key used to uniquely identify the element within an Array
     */
    public String key;
    /**
     * Inline style
     */
    public Object style;
    /**
     * Tooltip text APPLIES ONLY IF THE COMPONENT IS WRAPPED WITH Tooltip.
     * 
     * @see http://react-toolbox.com/#/components/tooltip
     */
    public String tooltip;
    /**
     * Amount of time in miliseconds spent before the tooltip is visible.
     * APPLIES ONLY IF THE COMPONENT IS WRAPPED WITH Tooltip.
     * 
     * @see http://react-toolbox.com/#/components/tooltip
     */
    public Double tooltipDelay;
    /**
     * If true, the Tooltip hides after a click in the host component. APPLIES
     * ONLY IF THE COMPONENT IS WRAPPED WITH Tooltip.
     * 
     * @default true
     * @see http://react-toolbox.com/#/components/tooltip
     */
    public boolean tooltipHideOnClick;
}
