import { Dropdown } from "react-bootstrap";

interface Props {
  title: string;
  items: string[];
}

function MyDropdown({ title, items }: Props) {
  return (
    <Dropdown>
      <Dropdown.Toggle className="bg-light text-dark fw-bolder w-100 text-start m-2 p-3 border border-light">
        {title}
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu-light w-100 bg-tertiary-subtle">
        <ol className="list">
          {items.map((item, index) => (
            <li key={index}>
              <Dropdown.Item>{item}</Dropdown.Item>
            </li>
          ))}
        </ol>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MyDropdown;
