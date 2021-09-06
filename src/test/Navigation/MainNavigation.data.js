import AccessibilityIcon from '@material-ui/icons/Accessibility';
import AirlineSeatIndividualSuiteIcon from '@material-ui/icons/AirlineSeatIndividualSuite';

export const testPages = [
  {
    navText: "Test",
    navIcon: <AccessibilityIcon />,
    pageContent: <div>Test Content</div>,
    pageTitle: "Test Page",
    path: "/test",
  },
  {
    navText: "Test2",
    navIcon: <AirlineSeatIndividualSuiteIcon />,
    pageContent: <div>Test 2 Content</div>,
    pageTitle: "Test Page 2",
    path: "/test2",
  },
];

export const testTitle = "My App";