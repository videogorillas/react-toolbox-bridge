stjs.ns("ReactToolboxProps");
ReactToolboxProps.Props = function(key) {
    this.key = key;
    this.id = key;
};
ReactToolboxProps.Props = stjs.extend(ReactToolboxProps.Props, null, [], function(constructor, prototype) {
    /**
     *  Sets a CSS class on the component.
     */
    prototype.className = null;
    prototype.id = null;
    /**
     *  @param id the id to set
     *  @return 
     */
    prototype.setId = function(id) {
        this.id = id;
        return this;
    };
    /**
     *  A key used to uniquely identify the element within an Array
     */
    prototype.key = null;
    prototype.ref = null;
    /**
     *  Inline style
     */
    prototype.style = null;
    prototype.setStyle = function(style) {
        this.style = style;
        return this;
    };
    prototype.setPadding = function(padding) {
        var css = this.style == null ? {} : this.style;
        css["padding"] = padding;
        this.setStyle(css);
        return this;
    };
    /**
     *  Tooltip text APPLIES ONLY IF THE COMPONENT IS WRAPPED WITH Tooltip.
     *  
     *  @see http://react-toolbox.com/#/components/tooltip
     */
    prototype.tooltip = null;
    /**
     *  Amount of time in miliseconds spent before the tooltip is visible.
     *  APPLIES ONLY IF THE COMPONENT IS WRAPPED WITH Tooltip.
     *  
     *  @see http://react-toolbox.com/#/components/tooltip
     */
    prototype.tooltipDelay = null;
    /**
     *  If true, the Tooltip hides after a click in the host component. APPLIES
     *  ONLY IF THE COMPONENT IS WRAPPED WITH Tooltip.
     *  
     *  @default true
     *  @see http://react-toolbox.com/#/components/tooltip
     */
    prototype.tooltipHideOnClick = false;
    prototype.setRef = function(ref) {
        this.ref = ref;
        return this;
    };
    prototype.setClassName = function(className) {
        this.className = className;
        return this;
    };
    prototype.toPlainObject = function() {
        return (Object).assign({}, this);
    };
}, {style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.Option = function(label, value) {
    this.label = label;
    this.value = value;
};
ReactToolboxProps.Option = stjs.extend(ReactToolboxProps.Option, null, [], function(constructor, prototype) {
    prototype.label = null;
    prototype.value = null;
    constructor.opt = function(label, value) {
        if (value == null) {
            value = label;
        }
        return new ReactToolboxProps.Option(label, value);
    };
}, {}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.Type = function(type) {
    this.type = type;
};
ReactToolboxProps.Type = stjs.extend(ReactToolboxProps.Type, null, [], function(constructor, prototype) {
    prototype.type = null;
    prototype.title = null;
    constructor.typeWithTitle = function(type, title) {
        var t = new ReactToolboxProps.Type(type);
        t.title = title;
        return t;
    };
}, {type: "Class"}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.LinkProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.LinkProps = stjs.extend(ReactToolboxProps.LinkProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  If {@code true}, adds active style to link.
     * 
     *  @default {@code false}
     */
    prototype.active = false;
    /**
     *  Sets a custom class name to add styles to the link.
     * 
     *  @default {@code ""}
     */
    prototype.className = null;
    /**
     *  Sets a count number.
     */
    prototype.count = 0;
    /**
     *  An icon key string to include a {@link com.vg.rt.FontIcon} component in
     *  front of the text.
     */
    prototype.icon = null;
    /**
     *  The text string used for the text content of the link.
     */
    prototype.label = null;
    prototype.onClick = null;
    prototype.setLabel = function(label) {
        this.label = label;
        return this;
    };
    prototype.setIcon = function(icon) {
        this.icon = icon;
        return this;
    };
    prototype.setActive = function(active) {
        this.active = active;
        return this;
    };
    prototype.setOnClick = function(onClick) {
        this.onClick = onClick;
        return this;
    };
}, {onClick: {name: "Callback1", arguments: ["DOMEvent"]}, style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.LayoutProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.LayoutProps = stjs.extend(ReactToolboxProps.LayoutProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  Additional class(es) for custom styling.
     */
    prototype.className = null;
}, {style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.NavDrawerProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.NavDrawerProps = stjs.extend(ReactToolboxProps.NavDrawerProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  Set a class for the root component.
     * 
     *  @default ""
     */
    prototype.className = null;
    /**
     * If true, the panel will vertically scroll all content. 
     */
    prototype.scrollY = false;
    /**
     *  enum('normal','wide') normal 320px or 400px. Only applicable above the sm
     *  breakpoint.
     */
    prototype.width = null;
    /**
     *  If true, the drawer will be shown as an overlay.
     */
    prototype.active = false;
    /**
     *  If true, the drawer will be pinned open. pinned takes precedence over
     *  active.
     */
    prototype.pinned = false;
    /**
     *  The breakpoint at which the drawer is automatically pinned.
     *  enum('sm','md','lg','xl','xxl','xxxl')
     */
    prototype.permanentAt = null;
    /**
     *  Callback function to be invoked when the overlay is clicked.
     */
    prototype.onOverlayClick = null;
}, {onOverlayClick: {name: "Callback1", arguments: ["DOMEvent"]}, style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.DropdownProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.DropdownProps = stjs.extend(ReactToolboxProps.DropdownProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.error = null;
    /**
     *  If true, the dropdown will open up or down depending on the position in
     *  the screen.
     */
    prototype.auto = false;
    /**
     *  The text string to use for the floating label element.
     */
    prototype.label = null;
    /**
     *  Array of data objects with the data to represent in the dropdown.
     */
    prototype.source = null;
    /**
     *  Callback function that returns a JSX template to represent the element.
     */
    prototype.template = null;
    /**
     *  Default value using JSON data.
     */
    prototype.value = null;
    prototype.onChange = null;
    prototype.disabled = false;
    prototype.setOnChange = function(onChange) {
        this.onChange = onChange;
        return this;
    };
    prototype.setSource = function(source) {
        this.source = source;
        return this;
    };
    prototype.setValue = function(value) {
        this.value = value;
        return this;
    };
    prototype.setLabel = function(label) {
        this.label = label;
        return this;
    };
    prototype.setError = function(error) {
        this.error = error;
        return this;
    };
    prototype.setDisabled = function(disabled) {
        this.disabled = disabled;
        return this;
    };
    prototype.setAuto = function(auto) {
        this.auto = auto;
        return this;
    };
}, {source: {name: "Array", arguments: [{name: "ReactToolboxProps.Option", arguments: ["Object"]}]}, template: {name: "Function0", arguments: [null]}, onChange: {name: "Callback1", arguments: [null]}, style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.CardTitleProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.CardTitleProps = stjs.extend(ReactToolboxProps.CardTitleProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.avatar = null;
    /**
     *  Children to pass through the component.
     */
    prototype.children = null;
    /**
     *  Sets a complementary smaller text under the title.
     */
    prototype.subtitle = null;
    /**
     *  Sets the title of the card.
     */
    prototype.title = null;
    prototype.setTitle = function(title) {
        this.title = title;
        return this;
    };
    prototype.setSubtitle = function(subtitle) {
        this.subtitle = subtitle;
        return this;
    };
    prototype.setAvatar = function(urlOrElement) {
        this.avatar = urlOrElement;
        return this;
    };
    prototype.setChildren = function(children) {
        this.children = children;
        return this;
    };
}, {avatar: "Object", children: "Object", title: "Object", style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.DatePickerProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.DatePickerProps = stjs.extend(ReactToolboxProps.DatePickerProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.label = null;
    /**
     *  Date object with the maximum selectable date.
     */
    prototype.maxDate = null;
    /**
     *  Date object with the minimum selectable date.
     */
    prototype.minDate = null;
    /**
     *  The text string to use like a input placeholder.
     */
    prototype.placeholder = null;
    /**
     *  Date object with the currently selected date.
     */
    prototype.value = null;
    prototype.onChange = null;
    prototype.readonly = false;
    /**
     *  @param readonly the readonly to set
     *  @return 
     */
    prototype.setReadonly = function(readonly) {
        this.readonly = readonly;
        return this;
    };
    /**
     * Function to format the date displayed on the input. 
     */
    prototype.inputFormat = null;
    prototype.setLabel = function(label) {
        this.label = label;
        return this;
    };
    prototype.setMinDate = function(minDate) {
        this.minDate = minDate;
        return this;
    };
    prototype.setValue = function(value) {
        this.value = value;
        return this;
    };
    prototype.setOnChange = function(onChange) {
        this.onChange = onChange;
        return this;
    };
}, {maxDate: "Date", minDate: "Date", value: "Date", onChange: {name: "Callback1", arguments: ["Date"]}, inputFormat: {name: "Function1", arguments: ["Date", null]}, style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.IconMenuProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.IconMenuProps = stjs.extend(ReactToolboxProps.IconMenuProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.icon = null;
    prototype.iconRipple = null;
    prototype.menuRipple = null;
    prototype.onClick = null;
    prototype.onHide = null;
    prototype.onSelect = null;
    prototype.onShow = null;
    prototype.position = null;
    prototype.selectable = null;
    prototype.selected = null;
    prototype.setIcon = function(icon) {
        this.icon = icon;
        return this;
    };
    prototype.setPosition = function(position) {
        this.position = position;
        return this;
    };
    prototype.setMenuRipple = function(menuRipple) {
        this.menuRipple = menuRipple;
        return this;
    };
}, {icon: "Object", onClick: {name: "Callback1", arguments: ["DOMEvent"]}, onHide: {name: "Callback1", arguments: ["DOMEvent"]}, onSelect: {name: "Callback1", arguments: ["DOMEvent"]}, onShow: {name: "Callback1", arguments: ["DOMEvent"]}, selected: "Object", style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.AppBarProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.AppBarProps = stjs.extend(ReactToolboxProps.AppBarProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  Set a class for the root component.
     * 
     *  @default ""
     */
    prototype.className = null;
    /**
     *  Determine if the bar should have position {@code fixed} or {@code relative}
     * 
     *  @default false
     */
    prototype.fixed = false;
    /**
     *  If {@code true}, the AppBar shows a shadow.
     * 
     *  @default false
     */
    prototype.flat = false;
    prototype.setFixed = function(fixed) {
        this.fixed = fixed;
        return this;
    };
    prototype.setFlat = function(flat) {
        this.flat = flat;
        return this;
    };
}, {style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.CardProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.CardProps = stjs.extend(ReactToolboxProps.CardProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  Child components, usually Card subcomponents.
     */
    prototype.children = null;
    /**
     *  Increases the shadow depth to appear elevated.
     */
    prototype.raised = false;
    /**
     *  Array of objects describing actions. These actions will be rendered as
     *  buttons and the object fields will be transferred to those.
     *  
     *  @default []
     */
    prototype.actions = null;
    /**
     *  Sets HEX or RGBA color to add a colored layer to the heading.
     */
    prototype.color = null;
    /**
     *  URL to set as a background image in the heading.
     */
    prototype.image = null;
    /**
     *  Type of the component to display general modifications. It can be 'wide'
     *  for a larger card, 'image' if it's an image card or 'event' which shows
     *  just a title on top.
     */
    prototype.type = null;
    prototype.onClick = null;
    prototype.setType = function(type) {
        this.type = type;
        return this;
    };
}, {children: "Object", actions: {name: "Array", arguments: ["ReactToolboxProps.ButtonProps"]}, onClick: "Callback0", style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.InputProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.InputProps = stjs.extend(ReactToolboxProps.InputProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.hint = null;
    prototype.name = null;
    /**
     *  Give an error string to display under the field.
     */
    prototype.error = null;
    /**
     *  Indicates if the label is floating in the input field or not.
     * 
     *  @default true
     */
    prototype.floating = false;
    /**
     *  The text string to use for the floating label element.
     */
    prototype.label = null;
    /**
     *  Specifies the maximum number of characters allowed in the component.
     */
    prototype.maxLength = null;
    /**
     *  If true, a textarea element will be rendered. The textarea also grows and
     *  shrinks according to the number of lines.
     * 
     *  @default false
     */
    prototype.multiline = false;
    /**
     *  Callback Callback1 that is fired when components is blurred.
     */
    prototype.onBlur = null;
    /**
     *  Callback Callback0 that is fired when components is focused.
     */
    prototype.onFocus = null;
    /**
     *  Callback Callback0 that is fired when a key is pressed down.
     */
    prototype.onKeyDown = null;
    /**
     *  Callback Callback0 that is fired when a key is pressed.
     */
    prototype.onKeyPress = null;
    /**
     *  Callback Callback0 that is fired when a key is released.
     */
    prototype.onKeyUp = null;
    /**
     *  Callback Callback1 that is fired when input starts.
     */
    prototype.onInput = null;
    /**
     *  If true, the html input has a required value.
     * 
     *  @default false
     */
    prototype.required = false;
    /**
     *  Type of the input element. It can be a valid HTML5 input type
     * 
     *  @default text
     */
    prototype.type = null;
    /**
     *  Current value of the input element.
     */
    prototype.value = null;
    prototype.disabled = false;
    prototype.icon = null;
    prototype.setIcon = function(icon) {
        this.icon = icon;
        return this;
    };
    prototype.onChange = null;
    prototype.setLabel = function(label) {
        this.label = label;
        return this;
    };
    prototype.setOnChange = function(onChange) {
        this.onChange = onChange;
        return this;
    };
    prototype.setOnKeyPress = function(onKeyPress) {
        this.onKeyPress = onKeyPress;
        return this;
    };
    prototype.setRequired = function(required) {
        this.required = required;
        return this;
    };
    prototype.setValue = function(value) {
        this.value = value;
        return this;
    };
    prototype.setType = function(type) {
        this.type = type;
        return this;
    };
    prototype.setName = function(name) {
        this.name = name;
        return this;
    };
    prototype.setDisabled = function(disabled) {
        this.disabled = disabled;
        return this;
    };
    prototype.setError = function(error) {
        this.error = error;
        return this;
    };
    prototype.setOnKeyDown = function(onKeyDown) {
        this.onKeyDown = onKeyDown;
        return this;
    };
    prototype.setOnFocus = function(event) {
        this.onFocus = event;
        return this;
    };
    prototype.placeholder = null;
}, {onBlur: {name: "Callback1", arguments: ["DOMEvent"]}, onFocus: {name: "Callback1", arguments: ["DOMEvent"]}, onKeyDown: {name: "Callback1", arguments: ["DOMEvent"]}, onKeyPress: {name: "Callback1", arguments: ["DOMEvent"]}, onKeyUp: {name: "Callback1", arguments: ["DOMEvent"]}, onInput: {name: "Callback1", arguments: ["DOMEvent"]}, icon: "Object", onChange: {name: "Callback1", arguments: [null]}, style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.FontIconProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.FontIconProps = stjs.extend(ReactToolboxProps.FontIconProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  The key string for the icon you want be displayed.
     */
    prototype.value = null;
    prototype.onClick = null;
    prototype.setClassName = function(className) {
        this.className = className;
        return this;
    };
    prototype.setValue = function(value) {
        this.value = value;
        return this;
    };
    prototype.setOnClick = function(cb) {
        this.onClick = cb;
        return this;
    };
    prototype.setId = function(id) {
        this.id = id;
        return this;
    };
}, {onClick: {name: "Callback1", arguments: ["DOMEvent"]}, style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.CardActionsProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.CardActionsProps = stjs.extend(ReactToolboxProps.CardActionsProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.children = null;
}, {children: "Object", style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.ListDividerProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.ListDividerProps = stjs.extend(ReactToolboxProps.ListDividerProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  Indicates if the divider should be full width or should leave a space on
     *  the left side.
     */
    prototype.inset = false;
}, {style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.MenuProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.MenuProps = stjs.extend(ReactToolboxProps.MenuProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.active = null;
    prototype.onHide = null;
    prototype.onSelect = null;
    prototype.onShow = null;
    prototype.outline = null;
    prototype.position = null;
    prototype.ripple = null;
    prototype.selectable = null;
    prototype.selected = null;
}, {onHide: {name: "Callback1", arguments: ["DOMEvent"]}, onSelect: {name: "Callback1", arguments: ["DOMEvent"]}, onShow: {name: "Callback1", arguments: ["DOMEvent"]}, selected: "Object", style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.ListSubHeaderProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.ListSubHeaderProps = stjs.extend(ReactToolboxProps.ListSubHeaderProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.caption = null;
    prototype.setCaption = function(caption) {
        this.caption = caption;
        return this;
    };
    prototype.setKey = function(k) {
        this.key = k;
        return this;
    };
}, {style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.PanelProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.PanelProps = stjs.extend(ReactToolboxProps.PanelProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  Set a class for the root component.
     * 
     *  @default ""
     */
    prototype.className = null;
    /**
     * If true, the panel will vertically scroll all content. 
     */
    prototype.scrollY = false;
    prototype.setScrollY = function(scrollY) {
        this.scrollY = scrollY;
        return this;
    };
}, {style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.NavigationProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.NavigationProps = stjs.extend(ReactToolboxProps.NavigationProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    constructor.HORIZONTAL = "horizontal";
    constructor.VERTICAL = "vertical";
    /**
     *  Type of the navigation, it can be {@code vertical} or {@code horizontal}.
     * 
     *  @default {@code horizontal}
     */
    prototype.type = null;
    /**
     *  Array of objects that will be represented as {@link com.vg.rt.Button} so
     *  the keys will be transferred as properties the Button Component.
     */
    prototype.actions = null;
    /**
     *  Array of objects similar to actions but that will be rendered as
     *  {@link com.vg.rt.Link} component definition.
     */
    prototype.routes = null;
    prototype.setType = function(type) {
        this.type = type;
        return this;
    };
}, {actions: {name: "Array", arguments: ["ReactToolboxProps.ButtonProps"]}, routes: {name: "Array", arguments: ["ReactToolboxProps.LinkProps"]}, style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.TableProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.TableProps = stjs.extend(ReactToolboxProps.TableProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.selectable = false;
    prototype.multiSelectable = false;
    /**
     *  If true, component will show a heading using model field names.
     */
    prototype.heading = false;
    /**
     *  Object describing the data model that represents each object in the
     *  source.
     */
    prototype.model = null;
    /**
     *  Callback function that is fired when an item in a row changes. If set,
     *  rows are editable.
     */
    prototype.onChange = null;
    /**
     *  Callback function invoked when the row selection changes.
     */
    prototype.onSelect = null;
    /**
     *  Array of indexes of the items in the source that should appear as
     *  selected.
     */
    prototype.selected = null;
    /**
     *  Array of objects representing each item to show.
     */
    prototype.source = null;
}, {model: {name: "Map", arguments: [null, "ReactToolboxProps.Type"]}, onChange: {name: "Callback3", arguments: [null, null, "Object"]}, onSelect: {name: "Callback1", arguments: [{name: "Array", arguments: [null]}]}, selected: {name: "Array", arguments: [null]}, source: {name: "Array", arguments: ["T"]}, style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.AutocompleteProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.AutocompleteProps = stjs.extend(ReactToolboxProps.AutocompleteProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  Sets the error string for the internal input element.
     */
    prototype.error = null;
    /**
     *  The text string to use for the floating label element.
     */
    prototype.label = null;
    /**
     *  If true, component can hold multiple values.
     *  
     *  @default true
     */
    prototype.multiple = false;
    /**
     *  Object of key/values or array representing all items suggested.
     */
    prototype.source = null;
    /**
     *  If true, the list of suggestions will not be filtered when a value is
     *  selected, until the query is modified.
     *  
     *  @default false
     */
    prototype.showSuggestionsWhenValueIsSet = false;
    /**
     *  Type of the input element. It can be a valid HTML5 input type
     *  
     *  @default text
     */
    prototype.type = null;
    /**
     *  Value or array of values currently selected component.Current value of
     *  the input element.
     */
    prototype.value = null;
    prototype.className = null;
    prototype.direction = null;
    prototype.disabled = false;
    prototype.onChange = null;
    prototype.onKeyPress = null;
    prototype.selectedPosition = null;
    prototype.suggestionMatch = null;
    prototype.hint = null;
    prototype.setLabel = function(label) {
        this.label = label;
        return this;
    };
    prototype.setMultiple = function(multiple) {
        this.multiple = multiple;
        return this;
    };
    prototype.setHint = function(hint) {
        this.hint = hint;
        return this;
    };
    prototype.setSource = function(source) {
        this.source = source;
        return this;
    };
    prototype.setOnChange = function(onChange) {
        this.onChange = onChange;
        return this;
    };
    prototype.setOnKeyPress = function(onKeyPress) {
        this.onKeyPress = onKeyPress;
        return this;
    };
    prototype.setValue = function(value) {
        this.value = value;
        return this;
    };
}, {source: "Object", value: "Object", onChange: "Callback1", onKeyPress: "Callback1", style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.TimePickerProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.TimePickerProps = stjs.extend(ReactToolboxProps.TimePickerProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.label = null;
    /**
     *  Format to display the clock. It can be 24hr or ampm.
     *  
     *  @default 24hr
     */
    prototype.format = null;
    /**
     *  Datetime object with currrently selected time
     */
    prototype.value = null;
    prototype.readonly = false;
    /**
     *  @param readonly the readonly to set
     *  @return 
     */
    prototype.setReadonly = function(readonly) {
        this.readonly = readonly;
        return this;
    };
    prototype.onChange = null;
    prototype.setValue = function(value) {
        this.value = value;
        return this;
    };
    prototype.setOnChange = function(onChange) {
        this.onChange = onChange;
        return this;
    };
    prototype.setLabel = function(label) {
        this.label = label;
        return this;
    };
}, {value: "Date", onChange: {name: "Callback1", arguments: ["Date"]}, style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.SidebarProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.SidebarProps = stjs.extend(ReactToolboxProps.SidebarProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  Set a class for the root component.
     * 
     *  @default ""
     */
    prototype.className = null;
    /**
     * If true, the sidebar will vertically scroll all content. 
     */
    prototype.scrollY = false;
    /**
     *  If true, the sidebar will be pinned open.
     */
    prototype.pinned = false;
    /**
     *  Width in standard increments (1-12) or percentage (25, 33, 50, 66, 75,
     *  100)
     *  
     *  enum(1,2,3,4,5,6,7,8,9,10,11,12,25,33,50,66,75,100) 5
     */
    prototype.width = 0;
    prototype.setPinned = function(pinned) {
        this.pinned = pinned;
        return this;
    };
}, {style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.ListCheckboxProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.ListCheckboxProps = stjs.extend(ReactToolboxProps.ListCheckboxProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  Main text of the item. Required.
     */
    prototype.caption = null;
    /**
     *  If true the checkbox appears checked by default.
     *  @default false
     */
    prototype.checked = false;
    /**
     *  Secondary text to display under the caption.
     */
    prototype.legend = null;
    /**
     *  Name for the checkbox input item.
     */
    prototype.name = null;
    /**
     *  Callback called when the input element is blurred.
     */
    prototype.onBlur = null;
    /**
     *  Callback called when the input element is focused.
     */
    prototype.onFocus = null;
    prototype.disabled = false;
    prototype.onChange = null;
    prototype.setCaption = function(caption) {
        this.caption = caption;
        return this;
    };
    prototype.setChecked = function(checked) {
        this.checked = checked;
        return this;
    };
    prototype.setName = function(name) {
        this.name = name;
        return this;
    };
    prototype.setOnChange = function(onChange) {
        this.onChange = onChange;
        return this;
    };
}, {onBlur: "Callback0", onFocus: "Callback0", onChange: {name: "Callback1", arguments: [null]}, style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.ProgressBarProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.ProgressBarProps = stjs.extend(ReactToolboxProps.ProgressBarProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     * Value of a secondary progress bar useful for buffering. 
     */
    prototype.buffer = null;
    /**
     * Maximum value permitted. 
     */
    prototype.max = null;
    /**
     * Minimum value permitted. 
     */
    prototype.min = null;
    /**
     * Mode of the progress bar, it can be determinate or indeterminate. 
     */
    prototype.mode = null;
    /**
     * If true, the circular progress bar will be changing its color. 
     */
    prototype.multicolor = null;
    /**
     * Type of the progress bar, it can be circular or linear. 
     */
    prototype.type = null;
    /**
     * Value of the current progress. 
     */
    prototype.value = null;
    prototype.setType = function(type) {
        this.type = type;
        return this;
    };
    prototype.setMulticolor = function(multicolor) {
        this.multicolor = multicolor;
        return this;
    };
    constructor.LINEAR = "linear";
    constructor.CIRCULAR = "circular";
}, {buffer: "Number", max: "Number", min: "Number", value: "Number", style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.MenuItemProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.MenuItemProps = stjs.extend(ReactToolboxProps.MenuItemProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.caption = null;
    prototype.disabled = null;
    prototype.onClick = null;
    prototype.selected = null;
    prototype.shortcut = null;
    prototype.icon = null;
    prototype.value = null;
    prototype.setValue = function(value) {
        this.value = value;
        return this;
    };
    prototype.setIcon = function(icon) {
        this.icon = icon;
        return this;
    };
    prototype.setCaption = function(caption) {
        this.caption = caption;
        return this;
    };
    prototype.setSelected = function(selected) {
        this.selected = selected;
        return this;
    };
    prototype.setOnClick = function(onClick) {
        this.onClick = onClick;
        return this;
    };
}, {onClick: {name: "Callback1", arguments: ["DOMEvent"]}, icon: "Object", style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.ButtonProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.ButtonProps = stjs.extend(ReactToolboxProps.ButtonProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  Indicates if the button should have accent color.
     *  
     *  @default false
     */
    prototype.accent = false;
    /**
     *  If true, the button will have a flat look.
     *  
     *  @default false
     */
    prototype.flat = false;
    /**
     *  If true, the button will have a floating look.
     *  
     *  @default false
     */
    prototype.floating = false;
    /**
     *  If specified, the button will be rendered as an <a>
     */
    prototype.href = null;
    /**
     *  The text string to use for the name of the button.
     */
    prototype.label = null;
    /**
     *  The text string to use for the type of the button.
     */
    prototype.type = null;
    /**
     *  If true, component will be disabled and show a loading animation.
     *  
     *  @default false
     */
    prototype.loading = false;
    /**
     *  To be used with floating button. If true the button will be smaller.
     *  
     *  @default false
     */
    prototype.mini = false;
    /**
     *  Indicates if the button should have primary color.
     *  
     *  @default false
     */
    prototype.primary = false;
    /**
     *  If true, the button will have a raised look.
     *  
     *  @default false
     */
    prototype.raised = false;
    /**
     *  If true, component will have a ripple effect on click.
     *  
     *  @default true
     */
    prototype.ripple = false;
    prototype.onClick = null;
    prototype.disabled = false;
    /**
     *  If true, the neutral colors are inverted. Useful to put a button over a
     *  dark background.
     */
    prototype.inverse = null;
    prototype.setInverse = function(inverse) {
        this.inverse = inverse;
        return this;
    };
    prototype.setDisabled = function(disabled) {
        this.disabled = disabled;
        return this;
    };
    /**
     *  Value of the icon (See icon component).
     */
    prototype.icon = null;
    prototype.setRaised = function(raised) {
        this.raised = raised;
        return this;
    };
    prototype.setPrimary = function(primary) {
        this.primary = primary;
        return this;
    };
    prototype.setIcon = function(icon) {
        this.icon = icon;
        return this;
    };
    prototype.setLabel = function(label) {
        this.label = label;
        return this;
    };
    prototype.setOnClick = function(onClick) {
        this.onClick = onClick;
        return this;
    };
    prototype.setFloating = function(floating) {
        this.floating = floating;
        return this;
    };
    prototype.setFlat = function(flat) {
        this.flat = flat;
        return this;
    };
    prototype.setAccent = function(accent) {
        this.accent = accent;
        return this;
    };
    prototype.setType = function(type) {
        this.type = type;
        return this;
    };
}, {onClick: {name: "Callback1", arguments: ["DOMEvent"]}, icon: "Object", style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.ListProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.ListProps = stjs.extend(ReactToolboxProps.ListProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  If true, each element in the list will have a ripple effect on click
     *  
     *  @default false
     */
    prototype.ripple = false;
    /**
     *  If true, the elements in the list will display a hover effect and a
     *  pointer cursor.
     *  
     *  @default false
     */
    prototype.selectable = false;
    prototype.setRipple = function(ripple) {
        this.ripple = ripple;
        return this;
    };
    prototype.setSelectable = function(selectable) {
        this.selectable = selectable;
        return this;
    };
}, {style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.CardMediaProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.CardMediaProps = stjs.extend(ReactToolboxProps.CardMediaProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  Forces a ('wide' 16:9) or ('square' 1:1) aspect ratio respectively.
     *  Unset, the media area will have a flexible height.
     *  
     *  @default ''
     */
    prototype.aspectRatio = null;
    /**
     *  Usually an image/video element or a <CardTitle> component.
     */
    prototype.children = null;
    /**
     *  Sets the background color
     */
    prototype.color = null;
    /**
     *  Creates a dark overlay underneath the child components.
     */
    prototype.contentOverlay = false;
    /**
     *  Can be used instead of children. Accepts an element or a URL string.
     */
    prototype.image = null;
    prototype.onClick = null;
    prototype.setImage = function(image) {
        this.image = image;
        return this;
    };
    prototype.setColor = function(color) {
        this.color = color;
        return this;
    };
    prototype.setAspectRatio = function(aspectRatio) {
        this.aspectRatio = aspectRatio;
        return this;
    };
}, {children: "Object", image: "Object", onClick: {name: "Callback1", arguments: ["DOMEvent"]}, style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.CheckboxProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.CheckboxProps = stjs.extend(ReactToolboxProps.CheckboxProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.checked = false;
    prototype.disabled = false;
    prototype.label = null;
    prototype.name = null;
    prototype.onBlur = null;
    prototype.onChange = null;
    prototype.onFocus = null;
    prototype.setChecked = function(checked) {
        this.checked = checked;
        return this;
    };
    prototype.setDisabled = function(disabled) {
        this.disabled = disabled;
        return this;
    };
    prototype.setLabel = function(label) {
        this.label = label;
        return this;
    };
    prototype.setName = function(name) {
        this.name = name;
        return this;
    };
    prototype.setOnBlur = function(onBlur) {
        this.onBlur = onBlur;
        return this;
    };
    prototype.setOnChange = function(onChange) {
        this.onChange = onChange;
        return this;
    };
    prototype.setOnFocus = function(onFocus) {
        this.onFocus = onFocus;
        return this;
    };
}, {onBlur: "Callback0", onChange: {name: "Callback1", arguments: [null]}, onFocus: "Callback0", style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.CardTextProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.CardTextProps = stjs.extend(ReactToolboxProps.CardTextProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.children = null;
}, {children: "Object", style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.SnackbarProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.SnackbarProps = stjs.extend(ReactToolboxProps.SnackbarProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.action = null;
    prototype.active = null;
    prototype.className = null;
    prototype.icon = null;
    prototype.label = null;
    prototype.onClick = null;
    prototype.onTimeout = null;
    prototype.timeout = null;
    prototype.type = null;
    prototype.setActive = function(active) {
        this.active = active;
        return this;
    };
}, {icon: "Object", onClick: {name: "Callback1", arguments: ["DOMEvent"]}, onTimeout: "Callback0", style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.DialogProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.DialogProps = stjs.extend(ReactToolboxProps.DialogProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  A array of objects representing the buttons for the dialog navigation
     *  area. The properties will be transferred to the buttons.
     */
    prototype.actions = null;
    /**
     * If true, the dialog will be active. 
     */
    prototype.active = null;
    /**
     * Sets a class to give customized styles to the dialog. 
     */
    prototype.className = null;
    /**
     * Callback called when the ESC key is pressed with the overlay active. 
     */
    prototype.onEscKeyDown = null;
    /**
     * Callback to be invoked when the dialog overlay is clicked. 
     */
    prototype.onOverlayClick = null;
    /**
     * Callback called when the mouse button is pressed on the overlay. 
     */
    prototype.onOverlayMouseDown = null;
    /**
     * Callback called when the mouse is moving over the overlay. 
     */
    prototype.onOverlayMouseMove = null;
    /**
     * Callback called when the mouse button is released over the overlay. 
     */
    prototype.onOverlayMouseUp = null;
    /**
     * The text string to use as standar title of the dialog. 
     */
    prototype.title = null;
    /**
     *  normal Used to determine the size of the dialog. It can be small, normal
     *  or large.
     */
    prototype.type = null;
    prototype.setClassName = function(className) {
        this.className = className;
        return this;
    };
    prototype.setOnEscKeyDown = function(onEscKeyDown) {
        this.onEscKeyDown = onEscKeyDown;
        return this;
    };
    prototype.setOnOverlayClick = function(onOverlayClick) {
        this.onOverlayClick = onOverlayClick;
        return this;
    };
    prototype.setOnOverlayMouseDown = function(onOverlayMouseDown) {
        this.onOverlayMouseDown = onOverlayMouseDown;
        return this;
    };
    prototype.setOnOverlayMouseMove = function(onOverlayMouseMove) {
        this.onOverlayMouseMove = onOverlayMouseMove;
        return this;
    };
    prototype.setOnOverlayMouseUp = function(onOverlayMouseUp) {
        this.onOverlayMouseUp = onOverlayMouseUp;
        return this;
    };
    prototype.setActions = function(actions) {
        this.actions = actions;
        return this;
    };
    prototype.setActive = function(active) {
        this.active = active;
        return this;
    };
    prototype.setTitle = function(title) {
        this.title = title;
        return this;
    };
    prototype.setType = function(type) {
        this.type = type;
        return this;
    };
}, {actions: {name: "Array", arguments: ["ReactToolboxProps.ButtonProps"]}, onEscKeyDown: {name: "Callback1", arguments: ["DOMEvent"]}, onOverlayClick: {name: "Callback1", arguments: ["DOMEvent"]}, onOverlayMouseDown: {name: "Callback1", arguments: ["DOMEvent"]}, onOverlayMouseMove: {name: "Callback1", arguments: ["DOMEvent"]}, onOverlayMouseUp: {name: "Callback1", arguments: ["DOMEvent"]}, style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.ListItemProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.ListItemProps = stjs.extend(ReactToolboxProps.ListItemProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  A string URL to specify an avatar in the left side of the item.
     */
    prototype.avatar = null;
    /**
     *  Main text of the item. Required.
     */
    prototype.caption = null;
    /**
     *  An element that will be displayed as the item. If set, this will override
     *  `caption` and `legend`.
     */
    prototype.itemContent = null;
    /**
     *  A list of elements that are placed on the left side of the item and after
     *  the avatar attribute.
     */
    prototype.leftActions = null;
    /**
     *  A string key of a font icon or element to display an icon in the left side of the item.
     */
    prototype.leftIcon = null;
    /**
     *  Secondary text to display under the caption.
     */
    prototype.legend = null;
    /**
     *  A list of elements that are placed on the right side of the item and
     *  after the rightIcon attribute.
     */
    prototype.rightActions = null;
    /**
     *  The same as the leftIcon but in this case the icon is displayed in the
     *  right side.
     */
    prototype.rightIcon = null;
    /**
     *  If true, the item displays a ripple effect on click. By default it's
     *  inherited from the parent element.
     *  
     *  @default false
     */
    prototype.ripple = false;
    /**
     *  If true, the elements in the list will display a hover effect and a
     *  pointer cursor. Inherited from the parent
     *  
     *  @default false
     */
    prototype.selectable = false;
    /**
     *  In case you want to provide the item as a link, you can pass this
     *  property to specify the href.
     */
    prototype.to = null;
    prototype.onClick = null;
    prototype.disabled = false;
    prototype.setCaption = function(caption) {
        this.caption = caption;
        return this;
    };
    prototype.setLegend = function(legend) {
        this.legend = legend;
        return this;
    };
    prototype.setKey = function(k) {
        this.key = k;
        return this;
    };
    prototype.setAvatar = function(avatar) {
        this.avatar = avatar;
        return this;
    };
    prototype.setSelectable = function(selectable) {
        this.selectable = selectable;
        return this;
    };
    prototype.setLeftIcon = function(leftIcon) {
        this.leftIcon = leftIcon;
        return this;
    };
    prototype.setDisabled = function(disabled) {
        this.disabled = disabled;
        return this;
    };
    prototype.setOnClick = function(onClick) {
        this.onClick = onClick;
        return this;
    };
    prototype.setRightIcon = function(rightIcon) {
        this.rightIcon = rightIcon;
        return this;
    };
    prototype.setRightActions = function(rightActions) {
        this.rightActions = rightActions;
        return this;
    };
    prototype.setLeftActions = function(leftActions) {
        this.leftActions = leftActions;
        return this;
    };
}, {avatar: "Object", itemContent: "ReactElement", leftActions: {name: "Array", arguments: [{name: "ReactElement", arguments: ["Object"]}]}, leftIcon: "Object", legend: "Object", rightActions: {name: "Array", arguments: [{name: "ReactElement", arguments: ["Object"]}]}, onClick: {name: "Callback1", arguments: ["DOMEvent"]}, style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.AvatarProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.AvatarProps = stjs.extend(ReactToolboxProps.AvatarProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.className = null;
    prototype.cover = null;
    prototype.icon = null;
    prototype.image = null;
    prototype.title = null;
    prototype.theme = null;
    prototype.setIcon = function(icon) {
        this.icon = icon;
        return this;
    };
    prototype.setTitle = function(title) {
        this.title = title;
        return this;
    };
    prototype.setImage = function(image) {
        this.image = image;
        return this;
    };
    prototype.setCover = function(cover) {
        this.cover = cover;
        return this;
    };
}, {icon: "Object", image: "Object", theme: "Object", style: {name: "Map", arguments: [null, "Object"]}}, {});
//# sourceMappingURL=react-toolbox-bridge.map
