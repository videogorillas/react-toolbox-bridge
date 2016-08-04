package com.vg.rt;

import static com.vg.rt.Option.opt;
import static org.stjs.bridge.react.React.createElement;
import static org.stjs.javascript.JSCollections.$array;

import org.stjs.bridge.react.Component;
import org.stjs.bridge.react.React;
import org.stjs.bridge.react.ReactDOM;
import org.stjs.bridge.react.internal.ReactElement;
import org.stjs.bridge.react.internal.State;
import org.stjs.javascript.Array;
import org.stjs.javascript.Global;
import org.stjs.javascript.JSCollections;

public class ListTest extends Component<Props, ListTest.ListTestState> {
    public static class ListTestState extends State {
        public boolean checkbox;
    }

    public ListTest(Props props) {
        super(props);
        state = new ListTestState() {
            {
                checkbox = false;
            }
        };
    }

    void handleCheckboxChange(boolean s) {
        this.setState(new ListTestState() {
            {
                checkbox = !state.checkbox;
            }
        });
    };

    public static void testList() throws Exception {
        ReactElement<ListTest> createElement = React.createElement(ListTest.class, null);
        ReactDOM.render(createElement, Global.window.document.getElementById("app"));

    //@formatter:off
    /*

    render () {
            return (
              <List selectable ripple>
                <ListSubHeader caption='Explore characters' />
                <ListItem
                  avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
                  caption='Dr. Manhattan'
                  legend="Jonathan 'Jon' Osterman"
                  rightIcon='star'
                />
                <ListItem
                  avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
                  caption='Ozymandias'
                  legend='Adrian Veidt'
                  rightIcon='star'
                />
                <ListItem
                  avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
                  caption='Rorschach'
                  legend='Walter Joseph Kovacs'
                  rightIcon='star'
                />
                <ListSubHeader caption='Configuration' />
                <ListCheckbox
                  caption='Notify new comics'
                  checked={this.state.checkbox}
                  legend='You will receive a notification when a new one is published'
                  onChange={this.handleCheckboxChange}
                />
                <ListDivider />
                <ListItem caption='Contact the publisher' leftIcon='send' />
                <ListItem caption='Remove this publication' leftIcon='delete' />
              </List>
            );
          }
    */
    //@formatter:on

    }

    @Override
    public ReactElement<?> render() {
        Array<Option<?>> roles = $array(opt("Pilot", "pilot"), opt("Observer", "observer"), opt("Participant", "participant"));
        ReactElement<Dropdown> dropdown = createElement(Dropdown.class, new DropdownProps() {
            {
                auto = true;
                source = roles;
                value = "pilot";
                label = "Role";
            }
        });

        ReactElement<List> createElement = createElement(List.class, new ListProps() {
            {
                ripple = true;
                selectable = true;
            }
        }, createElement(ListSubHeader.class, new ListSubHeaderProps() {
            {
                caption = "Explore characters";
            }
        }), createElement(ListItem.class, new ListItemProps() {
            {
                avatar = "https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg";
                caption = "Dr. Manhattan";
                legend = "Jonathan 'Jon' Osterman";
//                rightIcon = "star";
                rightActions = $array(dropdown);
            }
        }), createElement(ListItem.class, new ListItemProps() {
            {
                avatar = "https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg";
                caption = "Ozymandias";
                legend = "Adrian Veidt";
                rightIcon = "star";
            }
        }), createElement(ListItem.class, new ListItemProps() {
            {
                avatar = "https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg";
                caption = "Rorschach";
                legend = "Walter Joseph Kovacs";
                rightIcon = "star";
            }
        }), createElement(ListSubHeader.class, new ListSubHeaderProps() {
            {
                caption = "Configuration";
            }
        }), createElement(ListCheckbox.class, new ListCheckboxProps() {
            {
                caption = "Notify new comics";
                checked = state.checkbox;
                legend = "You will receive a notification when a new one is published";
                onChange = s -> handleCheckboxChange(s);
            }
        }), createElement(ListDivider.class, null), createElement(ListItem.class, new ListItemProps() {
            {
                caption = "Contact the publisher";
                leftIcon = "send";

            }
        }), createElement(ListItem.class, new ListItemProps() {
            {
                caption = "Remove this publication";
                leftIcon = "delete";

            }
        }));

        return createElement;
    }

}
