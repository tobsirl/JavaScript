import React from 'react';

const FlyOutContext = React.createContext(null);

export function FlyOut(props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const toggle = React.useCallback(() => setOpen((state) => !state), []);
  return (
    <FlyOutContext.Provider value={{ open, value, toggle, setValue }}>
      {props.children}
    </FlyOutContext.Provider>
  );
}

function Input(props) {
  const { value, toggle, setValue } = React.useContext(FlyOutContext);

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
  const { open } = React.useContext(FlyOutContext);

  return (
    open && (
      <div className="flyout-list">
        <ul>{props.children}</ul>
      </div>
    )
  );
}

function Item(props) {
  const { setValue } = React.useContext(FlyOutContext);

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

FlyOut.Input = Input;
FlyOut.List = List;
FlyOut.ListItem = Item;
