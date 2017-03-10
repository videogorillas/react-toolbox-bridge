package com.vg.rt;

import org.stjs.javascript.Array;
import org.stjs.javascript.annotation.Namespace;
import org.stjs.javascript.dom.DOMEvent;
import org.stjs.javascript.functions.Callback1;

@Namespace("ReactToolboxProps")
public class DialogProps extends Props {
    public DialogProps(String key) {
        super(key);
    }

    /**
     * A array of objects representing the buttons for the dialog navigation
     * area. The properties will be transferred to the buttons.
     */
    public Array<ButtonProps> actions;//Array   []  

    /** If true, the dialog will be active. */
    public Boolean active;//false
    /** Sets a class to give customized styles to the dialog. */
    public String className; //''
    /** Callback called when the ESC key is pressed with the overlay active. */
    public Callback1<DOMEvent> onEscKeyDown; //
    /** Callback to be invoked when the dialog overlay is clicked. */
    public Callback1<DOMEvent> onOverlayClick; //
    /** Callback called when the mouse button is pressed on the overlay. */
    public Callback1<DOMEvent> onOverlayMouseDown; //
    /** Callback called when the mouse is moving over the overlay. */
    public Callback1<DOMEvent> onOverlayMouseMove; //
    /** Callback called when the mouse button is released over the overlay. */
    public Callback1<DOMEvent> onOverlayMouseUp; //
    /** The text string to use as standar title of the dialog. */
    public String title; //
    /**
     * normal Used to determine the size of the dialog. It can be small, normal
     * or large.
     */
    public String type; //

    public DialogProps setClassName(String className) {
        this.className = className;
        return this;
    }

    public DialogProps setOnEscKeyDown(Callback1<DOMEvent> onEscKeyDown) {
        this.onEscKeyDown = onEscKeyDown;
        return this;
    }

    public DialogProps setOnOverlayClick(Callback1<DOMEvent> onOverlayClick) {
        this.onOverlayClick = onOverlayClick;
        return this;
    }

    public DialogProps setOnOverlayMouseDown(Callback1<DOMEvent> onOverlayMouseDown) {
        this.onOverlayMouseDown = onOverlayMouseDown;
        return this;
    }

    public DialogProps setOnOverlayMouseMove(Callback1<DOMEvent> onOverlayMouseMove) {
        this.onOverlayMouseMove = onOverlayMouseMove;
        return this;
    }

    public DialogProps setOnOverlayMouseUp(Callback1<DOMEvent> onOverlayMouseUp) {
        this.onOverlayMouseUp = onOverlayMouseUp;
        return this;
    }

    public DialogProps setActions(Array<ButtonProps> actions) {
        this.actions = actions;
        return this;
    }

    public DialogProps setActive(Boolean active) {
        this.active = active;
        return this;
    }

    public DialogProps setTitle(String title) {
        this.title = title;
        return this;
    }

    public DialogProps setType(String type) {
        this.type = type;
        return this;
    }
}
