package com.vg.rt;

import static org.stjs.bridge.react.React.createElement;

import org.stjs.bridge.react.Component;
import org.stjs.bridge.react.React;
import org.stjs.bridge.react.ReactDOM;
import org.stjs.bridge.react.internal.ReactElement;
import org.stjs.bridge.react.internal.State;
import org.stjs.javascript.Date;
import org.stjs.javascript.Global;
import org.stjs.javascript.functions.Callback1;

public class TimePickerTest extends Component<Props, TimePickerTest.TimePickerTestState> {

    public TimePickerTest(Props props) {
        super(props);
        state = new TimePickerTestState() {
            {
                time = new Date();
            }
        };
    }

    public class TimePickerTestState extends State {
        public Date time;
    }

    public static void testTimePicker() throws Exception {
        ReactElement<TimePickerTest> createElement = React.createElement(TimePickerTest.class, null);
        ReactDOM.render(createElement, Global.window.document.getElementById("app"));

        //@formatter:off
/*
        let time = new Date();
        time.setHours(17);
        time.setMinutes(28);

        class TimePickerTest extends React.Component {
            state = {time};

          handleChange = (time) => {
            this.setState({time});
          };

          render () {
            return <TimePicker label='Finishing time' onChange={this.handleChange} value={this.state.time} />;
          }
        }

        return <TimePickerTest />
        
        const datetime = new Date(2015, 10, 16);
const min_datetime = new Date(new Date(datetime).setDate(8));
datetime.setHours(17);
datetime.setMinutes(28);

class DatePickerTest extends React.Component {
  state = {date2: datetime};

  handleChange = (item, value) => {
    this.setState({...this.state, [item]: value});
  };

  render () {
    return (
      <section>
        <DatePicker label='Birthdate' onChange={this.handleChange.bind(this, 'date1')} value={this.state.date1} />
        <DatePicker label='Expiration date' minDate={min_datetime} onChange={this.handleChange.bind(this, 'date2')} value={this.state.date2} />
        <DatePicker label='Formatted date' inputFormat={(value) => `${value.getDate()}/${value.getMonth() + 1}/${value.getFullYear()}`} onChange={this.handleChange.bind(this, 'date3')} value={this.state.date3} />
      </section>
    );
  }
}
*/
        //@formatter:on

    }

    @Override
    public ReactElement<?> render() {
        Date min_datetime = new Date();

        Callback1<Date> _changed = (t) -> {
            setState(new TimePickerTestState() {
                {
                    time = t;
                }
            });
        };

        ReactElement<TimePicker> tp = createElement(TimePicker.class, new TimePickerProps("a") {
            {
                label = "Finishing time";
                onChange = _changed;
                value = state.time;
            }
        });

        ReactElement<DatePicker> dp1 = createElement(DatePicker.class, new DatePickerProps("b") {
            {
                label = "Birthdate";
                onChange = _changed;
                value = state.time;
            }
        });

        ReactElement<DatePicker> dp2 = createElement(DatePicker.class, new DatePickerProps("c") {
            {
                label = "Expiration date";
                minDate = min_datetime;
                onChange = _changed;
                value = state.time;
            }
        });

        ReactElement<DatePicker> dp3 = createElement(DatePicker.class, new DatePickerProps("d") {
            {
                label = "Formatted date";
                inputFormat = (value) -> {
                    return "" + value.getDate() + "/" + (value.getMonth() + 1) + "/" + value.getFullYear();
                };
                onChange = _changed;
                value = state.time;
            }
        });

        ReactElement<?> section = React.DOM.section(null, tp, dp1, dp2, dp3);

        return section;
    }
}
