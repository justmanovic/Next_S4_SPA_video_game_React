import { useContext } from "react";
import MyContext from "../Context";
import style from "./PlatformFilter.module.css";

const PlatformFilter = () => {
  const ctx = useContext(MyContext);
  function selectPlatform(platform) {
    ctx.setPlatform(platform);
  }

  return (
    <div>
      <select
        onChange={(e) => selectPlatform(e.target.value)}
        value={ctx.selectedPlatform}
      >
        <option value="">Sélectionnez une console</option>
        <option value="PlayStation">PlayStation</option>
        <option value="Xbox">Xbox</option>
        <option value="Nintendo">Nintendo</option>
        <option value="PC">PC</option>
        <option value="Linux">Linux</option>
        <option value="Mac">Mac</option>
      </select>
    </div>
  );
};

export default PlatformFilter;
