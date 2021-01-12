import { useEffect, useState, useRef } from "react";
import defaultAxios from "axios";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    console.log(event.target);
    const {
      target: { value },
    } = event;

    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const check = (v) => !v.includes("@");
  const [item, setItem] = useState(1);
  const name = useInput("Mr. ", check);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>hi {name.value}</h1>
      <h2>Current Value : {item}</h2>
      <input placeholder="Name" {...name} />
      <br />
      <button onClick={incrementItem}>INC</button>
      <button onClick={decrementItem}>DEC</button>
    </div>
  );
};

const content = [
  {
    tab: "section 1",
    content: "I'm section 1",
  },
  {
    tab: "section 2",
    content: "I'm section 2",
  },
];
const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return { currentItem: allTabs[currentIndex], setCurrentIndex };
};

const Bpp = () => {
  const { currentItem, setCurrentIndex } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((th, idx) => (
        <div key={idx}>
          <button onClick={() => setCurrentIndex(idx)}>{th.tab}</button>
          <br />
        </div>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};
//useEffect(function when Mount[,deps]) when you listen to some variables, put them in deps and when deps changes, function will executed,
// or Put brackets only, function will executed once when mounted
// or No brackets, function will exectued every re-render

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const Cpp = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};

//cursor will focused on that ref'ed input
const Dpp = () => {
  const hellow = useRef();
  setTimeout(() => hellow.current?.focus(), 3000);
  return (
    <div className="App">
      <div>hi</div>
      <input ref={hellow} placeholder="as" />
    </div>
  );
};

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => element.current.removeEventListener("click", onClick);
  }, []);
  return element;
};

const Epp = () => {
  const sayHello = () => console.log("Hi");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

const useConfirm = (message = "", callback) => {
  if (typeof callback !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    }
  };
  return confirmAction;
};

const Fpp = () => {
  const deleteWorld = () => console.log("Deleting the world...");
  const confirmDelete = useConfirm("R U sure?", deleteWorld);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete World?</button>
    </div>
  );
};

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) onBefore();
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []); //Cuz going to execute just once
};

const Gpp = () => {
  const begForLife = () => alert("plz don't leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <div>hi</div>
    </div>
  );
};

const useFadeIn = (initialValue = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.opacity = 1;
      current.style.transition = `opacity 3s`;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

const Hpp = () => {
  const el = useFadeIn(0);
  return (
    <div className="App">
      <h1 {...el}>hi</h1>
    </div>
  );
};

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.addEventListener("online", handleChange);
      window.addEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

const Ipp = () => {
  const handleNetChange = (online) =>
    console.log(online ? "You're online" : "No you're not");
  const online = useNetwork(handleNetChange);
  return (
    <div className="App">
      <div>{online ? "Online" : "Offline"}</div>
    </div>
  );
};

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

const Jpp = () => {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 10 ? "red" : "blue" }}>Hi</h1>
    </div>
  );
};

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFullscreen = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    element.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFullscreen, exitFull };
};

const Kpp = () => {
  const onFullS = (v) => console.log(v ? "We are full" : "We are not");
  const { element, triggerFullscreen, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App">
      <div ref={element}>
        <img src="https://picsum.photos/200/300"></img>
        <br />
        <button onClick={exitFull}>Exit!</button>
      </div>
      <br />
      <button onClick={triggerFullscreen}>FullScreen!</button>
    </div>
  );
};

const useNotifications = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};
// https://developer.mozilla.org/ko/docs/Web/API/notification
const Lpp = () => {
  const triggerNotification = useNotifications("Helllllow", {
    body: "requesets okay",
  });
  return (
    <div className="App">
      <button onClick={triggerNotification}>Hello</button>
    </div>
  );
};

const useAxios = (opts, axiosInstance = defaultAxios) => {
  if (!opts.url) {
    return;
  }
};

const Npp = () => {
  const request = useAxios();
  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
};

export default Npp;

// const use = () => {};

// const pp = () => {
//   return (
//     <div className="App">
//       <h1>Hi</h1>
//     </div>
//   );
// };
