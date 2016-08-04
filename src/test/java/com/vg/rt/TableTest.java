package com.vg.rt;

import static com.vg.rt.Option.opt;
import static org.stjs.bridge.react.React.createElement;
import static org.stjs.javascript.Global.console;
import static org.stjs.javascript.JSCollections.$array;

import org.stjs.bridge.react.Component;
import org.stjs.bridge.react.React;
import org.stjs.bridge.react.ReactDOM;
import org.stjs.bridge.react.internal.ReactElement;
import org.stjs.bridge.react.internal.State;
import org.stjs.javascript.Array;
import org.stjs.javascript.Date;
import org.stjs.javascript.Global;
import org.stjs.javascript.JSCollections;
import org.stjs.javascript.Map;

public class TableTest extends Component<Props, TableTest.TableTestState> {
    public static class User {
        public String name; //: {type: String},
        public String twitter; //: {type: String},
        public Date birthdate; //: {type: Date},
        public int cats; //: {type: Number},
        public int dogs; //: {type: Number},
        public boolean active; //: {type: Boolean}
    }

    public static class Type {
        public Class type;

        public Type(Class type) {
            this.type = type;
        }
    }

    public final static Type STRING = new Type(String.class);
    public final static Type DATE = new Type(Date.class);
    public final static Type NUMBER = new Type(Number.class);
    public final static Type BOOLEAN = new Type(Boolean.class);

    public static class UserModel {
        public Type name; //: {type: String},
        public Type twitter; //: {type: String},
        public Type birthdate; //: {type: Date},
        public Type cats; //: {type: Number},
        public Type dogs; //: {type: Number},
        public Type active; //: {type: Boolean}
    }

    public static class TableTestState extends State {
        public Array<Integer> selected;
        public Array<User> source;
    }

    public TableTest(Props props) {
        super(props);

        User u1 = new User();
        u1.name = "Alex Zhukov";
        u1.twitter = "@zhuker";
        u1.birthdate = new Date(1982, 06, 28);
        u1.dogs = 1;

        User u2 = new User();
        u2.name = "Anton Linevich";
        u2.twitter = "@chexov";
        u2.birthdate = new Date(1986, 03, 07);
        u2.cats = 1;

        Array<User> users = $array(u1, u2);

        state = new TableTestState();
        state.source = users;
        state.selected = $array();
    }

    public static void testTable() throws Exception {
        ReactElement<TableTest> createElement = React.createElement(TableTest.class, null);
        ReactDOM.render(createElement, Global.window.document.getElementById("app"));

    //@formatter:off
    /*

const UserModel = {
  name: {type: String},
  twitter: {type: String},
  birthdate: {type: Date},
  cats: {type: Number},
  dogs: {type: Number},
  active: {type: Boolean}
};

const users = [
  {name: 'Javi Jimenez', twitter: '@soyjavi', birthdate: new Date(1980, 3, 11), cats: 1},
  {name: 'Javi Velasco', twitter: '@javivelasco', birthdate: new Date(1987, 1, 1), dogs: 1, active: true}
];

class TableTest extends React.Component {
  state = { selected: [], source: users };

  handleChange = (row, key, value) => {
    const source = this.state.source;
    source[row][key] = value;
    this.setState({source});
  };

  handleSelect = (selected) => {
    this.setState({selected});
  };

  render () {
    return (
      <Table
        model={UserModel}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        selectable
        multiSelectable
        selected={this.state.selected}
        source={this.state.source}
      />
    );
  }
}
    */
    //@formatter:on

    }

    @Override
    public ReactElement<?> render() {
        UserModel userModel = new UserModel();
        userModel.name = STRING;
        userModel.twitter = STRING;
        userModel.birthdate = DATE;
        userModel.cats = NUMBER;
        userModel.dogs = NUMBER;
        userModel.active = BOOLEAN;

        ReactElement<Table> table = createElement(Table.class, new TableProps<UserModel, User>() {
            {
                model = userModel;
                onChange = (row, key, value) -> {
                    console.log("onChange", row, key, value);
                };
                onSelect = (selected) -> {
                    console.log("onSelect", selected);
                    state.selected = selected;
                    setState(state);
                };
                selectable = true;
                multiSelectable = true;
                selected = state.selected;
                source = state.source;
            }
        });
        return table;
    }

}
