export default function appReducer(state, action) {
    console.log(state, action);
    switch (action) {
      case "dashboard":
            state = 'newfacility';
            return state;

        case 'newfacility':
            state = 'dashboard';
            return state;
        default:
            return state;
    }
  }