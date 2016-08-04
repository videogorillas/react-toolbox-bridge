package com.vg.rt;

import static org.stjs.bridge.react.React.createElement;
import static org.stjs.javascript.Global.window;
import static org.stjs.javascript.JSCollections.$map;

import org.stjs.bridge.react.Component;
import org.stjs.bridge.react.React;
import org.stjs.bridge.react.ReactDOM;
import org.stjs.bridge.react.internal.ReactElement;
import org.stjs.bridge.react.internal.State;

public class CardTest extends Component<Props, State> {
    public CardTest(Props props) {
        super(props);
    }

    public static void testCard() throws Exception {
        ReactElement<CardTest> createElement = React.createElement(CardTest.class, null);
        ReactDOM.render(createElement, window.document.getElementById("app"));

    //@formatter:off
    /*
const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

const TestCards = () => (
  <Card style={{width: '350px'}}>
    <CardTitle
      avatar="https://placeimg.com/80/80/animals"
      title="Avatar style title"
      subtitle="Subtitle here"
    />
    <CardMedia
      aspectRatio="wide"
      image="https://placeimg.com/800/450/nature"
    />
    <CardTitle
      title="Title goes here"
      subtitle="Subtitle here"
    />
    <CardText>{dummyText}</CardText>
    <CardActions>
      <Button label="Action 1" />
      <Button label="Action 2" />
    </CardActions>
  </Card>
);

    */
    //@formatter:on

    }

    @Override
    public ReactElement<?> render() {
        String dummyText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

        ReactElement<Card> card = createElement(Card.class, new CardProps() {
            {
                style = $map("width", "350px");
            }
        }, createElement(CardTitle.class, new CardTitleProps() {
            {
                avatar = "https://placeimg.com/80/80/animals";
                title = "Avatar style title";
                subtitle = "Subtitle here";
            }
        }), createElement(CardMedia.class, new CardMediaProps() {
            {
                aspectRatio = "wide";
                image = "https://placeimg.com/800/450/nature";
            }
        }), createElement(CardTitle.class, new CardTitleProps() {
            {
                title = "Title goes here";
                subtitle = "Subtitle here";
            }
        }), createElement(CardText.class, null, dummyText), createElement(CardActions.class, null, createElement(Button.class, new ButtonProps() {
            {
                label = "Left";
            }
        }), createElement(Button.class, new ButtonProps() {
            {
                label = "Right";
            }
        })));

        return card;
    }

}
