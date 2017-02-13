package com.vg.rt;

import static org.stjs.bridge.react.React.createElement;
import static org.stjs.bridge.react.React.DOM.section;
import static org.stjs.bridge.react.React.DOM.span;
import static org.stjs.javascript.Global.console;

import org.stjs.bridge.react.Component;
import org.stjs.bridge.react.React;
import org.stjs.bridge.react.ReactDOM;
import org.stjs.bridge.react.internal.ReactElement;
import org.stjs.bridge.react.internal.State;
import org.stjs.javascript.Global;

public class InputTest extends Component<Props, InputTest.InputTestState> {

    public class InputTestState extends State {
        public String name;
        public String phone;
        public String multiline;
        public String email;
        public String hint;
    }

    public InputTest(Props props) {
        super(props);
        state = new InputTestState();
    }

    public static void testInput() throws Exception {
        ReactElement<InputTest> createElement = React.createElement(InputTest.class, null);
        ReactDOM.render(createElement, Global.window.document.getElementById("app"));

        //@formatter:off
/*
class InputTest extends React.Component {
  state = { name: '', phone: '', multiline: '', email: '', hint: '' };

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  render () {
    return (
      <section>
        <Input type='text' label='Name' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} maxLength={16 } />
        <Input type='text' label='Disabled field' disabled />
        <Input type='text' multiline label='Multiline' onChange={this.handleChange.bind(this, 'multiline')} />
        <Input type='email' label='Email address' icon='email' value={this.state.email} onChange={this.handleChange.bind(this, 'email')} />
        <Input type='tel' label='Phone' name='phone' icon='phone' value={this.state.phone} onChange={this.handleChange.bind(this, 'phone')} />
        <Input type='text' value={this.state.hint} label='Required Field' hint='With Hint' required onChange={this.handleChange.bind(this, 'hint')} icon={<span>J</span>} />
      </section>
    );
  }
}

return <InputTest />;
*/
        //@formatter:on

    }

    @Override
    public ReactElement<?> render() {
        ReactElement<?> section = section(null, createElement(Input.class, new InputProps("a") {
            {
                type = "text";
                label = "Name";
                name = "name";
                value = state.name;
                onChange = (s) -> {
                    console.log("onChange", s);
                };
                maxLength = 16.;
            }
        }), createElement(Input.class, new InputProps("b") {
            {
                type = "text";
                label = "Disabled field";
                disabled = true;
            }
        }), createElement(Input.class, new InputProps("c") {
            {
                type = "text";
                label = "Multiline";
                multiline = true;
                onChange = (s) -> {
                    console.log("onChange", s);
                };
                maxLength = 16.;
            }
        }), createElement(Input.class, new InputProps("d") {
            {
                type = "email";
                label = "Email address";
                icon = "email";
                value = state.email;
                onChange = (s) -> {
                    console.log("onChange", s);
                };
            }
        }), createElement(Input.class, new InputProps("e") {
            {
                type = "tel";
                label = "Phone";
                name = "phone";
                icon = "phone";
                value = state.phone;
                onChange = (s) -> {
                    console.log("onChange", s);
                };
            }
        }), createElement(Input.class, new InputProps("f") {
            {
                type = "text";
                label = "Required Field";
                icon = span(null, "J");
                hint = "With Hint";
                value = state.hint;
                required = true;
                onChange = (s) -> {
                    console.log("onChange", s);
                };
            }
        }));

        return section;
    }
}
