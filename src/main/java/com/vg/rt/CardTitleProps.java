package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;

@Namespace("ReactToolbox")
public class CardTitleProps extends Props {
    public Object avatar; //?: string | __React.ReactElement<any> | __React.ReactHTMLElement<any> | __React.ClassicComponent<any, any>,
    /**
     * Children to pass through the component.
     */
    public Object children; //?: any,
    /**
     * Sets a complementary smaller text under the title.
     */
    public String subtitle; //?: string,
    /**
     * Sets the title of the card.
     */
    public Object title; //?: string | boolean,

}
