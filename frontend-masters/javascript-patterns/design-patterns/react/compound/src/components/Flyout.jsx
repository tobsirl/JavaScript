import React from 'react';

const FlyoutContext = React.createContext(null);

export function Flyout(props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const toggle = React.useCallback(() => setOpen((state) => !state), []);
  return (
    <FlyoutContext.Provider value={{ open, value, toggle, setValue }}>
      {props.children}
    </FlyoutContext.Provider>
  );
}

function Input(props) {
  const { value, toggle, setValue } = React.useContext(FlyoutContext);

  return (
    <div className="flyout">
      <input
        onFocus={toggle}
        onBlur={toggle}
        className="flyout-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter an address, city ,or ZIP code"
        {...props}
      />
    </div>
  );
}

function List(props) {
  const { open } = React.useContext(FlyoutContext);

  return (
    open && (
      <div className="flyout-list">
        <ul>{props.children}</ul>
      </div>
    )
  );
}

function Item(props) {
  const { setValue } = React.useContext(FlyoutContext);

  return (
    <li
      onMouseDown={() => {
        setValue(props.value);
      }}
      className="flyout-list-item"
    >
      {props.children}
    </li>
  );
}

Flyout.Input = Input;
Flyout.List = List;
Flyout.ListItem = Item;
