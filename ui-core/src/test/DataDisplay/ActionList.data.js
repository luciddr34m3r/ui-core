import DeleteIcon from '@material-ui/icons/Delete';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const items = [
  {
    text: "foo",
  },
  {
    text: "bar",
  }
];

const actions = [
  {
    text: "Delete",
    icon: <DeleteIcon />,
    action: (e) => console.log(`delete ${e}`)
  },
  {
    text: "Favorite",
    icon: <StarBorderIcon />,
    action: (e) => console.log(`favorite ${e}`)
  },
];

export {
  items,
  actions,
}