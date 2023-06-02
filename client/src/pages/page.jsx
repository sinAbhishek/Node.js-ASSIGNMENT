import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import "./page.css";
const Page = () => {
  const [data, setdata] = useState([]);
  const [dark, setdark] = React.useState(true);
  const darkTheme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
    },
  });
  const darkmo = (e) => {
    e.target.checked ? setdark(true) : setdark(false);
  };
  useEffect(() => {
    fetch(process.env.REACT_APP_URL)
      .then((res) => res.json())
      .then((res) => setdata(res[0].currencies));
  }, []);
  const test = () => {
    console.log(dark);
  };
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="  w-screen h-max">
        <div className="nav py-8 mx-8 justify-between flex">
          <div className=" md:w-1/3 flex items-center">
            <h1 className=" text-5xl text-cyan-300">HODLINFO</h1>
          </div>

          <div className="mid md:w-1/3 flex justify-center items-center">
            <button
              onClick={test}
              className=" bg-gray-700  w-16 mx-3 rounded-lg text-white h-8 font-medium"
            >
              INR
            </button>
            <button className=" bg-gray-700  w-16 mx-3 rounded-lg text-white h-8 font-medium">
              BTC
            </button>
            <button className=" bg-gray-700 w-max mx-3 rounded-lg text-white h-8 px-4 font-medium">
              BUY BTC
            </button>
          </div>
          <div className="last md:w-1/3 flex justify-end items-center">
            <button className=" h-10 rounded-lg w-max bg-cyan-300 text-white px-5">
              Connect Telegram
            </button>
            <FormGroup>
              <FormControlLabel
                control={
                  <MaterialUISwitch
                    sx={{ m: 1 }}
                    onChange={darkmo}
                    checked={dark}
                  />
                }
              />
            </FormGroup>
          </div>
        </div>
        <div className="midsection flex justify-between mt-4 items-center">
          <div className="com w-1/6 h-max flex justify-center flex-col items-center">
            <h1 className=" text-5xl text-cyan-300 ">1 %</h1>
            <p className=" text-xl text-slate-500  ">5 Mins</p>
          </div>
          <div className="com w-1/6 h-max flex justify-center flex-col items-center">
            <h1 className=" text-5xl text-cyan-300 ">1.07 %</h1>
            <p className=" text-xl text-slate-500  ">1 hour</p>
          </div>
          <div className="com flex flex-col w-max h-max justify-between items-center pb-4">
            <h1 className=" text-2xl text-slate-400 w-max mx-auto mb-2">
              Best Price to Trade
            </h1>
            <h1 className="price text-7xl mb-2 ">₹24,41,385</h1>
            <p className="bottxt text-base text-slate-500 ">
              Average BTC/INR net price including commission
            </p>
          </div>
          <div className="com w-1/6 h-max flex justify-center flex-col items-center">
            <h1 className=" text-5xl text-cyan-300">0.6 %</h1>
            <p className=" text-xl text-slate-500 ">1 Day</p>
          </div>
          <div className="com w-1/6 h-max flex justify-center flex-col items-center">
            <h1 className=" text-5xl text-cyan-300 ">0.6 %</h1>
            <p className=" text-xl text-slate-500 ">7 Days</p>
          </div>
        </div>
        <div className="bot flex justify-center h-max mx-8 px-4">
          <table className=" w-full h-full border-separate border-spacing-x-0 border-spacing-y-4 ">
            <thead className="text-xl md:text-2xl text-slate-500 font-semibold">
              <tr>
                <th>#</th>
                <th>Platform</th>
                <th>Last Traded Price</th>
                <th>Buy / Sell Price</th>
                <th>Volume</th>
                <th>Base_Unit</th>
              </tr>
            </thead>
            <tbody className="w-screen text-xl  md:text-2xl text-white font-semibold text-center bg-slate-600 ">
              {data[0] &&
                data.map((c, i) => (
                  <tr className=" w-full">
                    <td
                      style={{ borderRadius: "1rem 0rem 0rem 1rem" }}
                      className=" mt-12 w-2"
                    >
                      {i + 1}
                    </td>
                    <td>{c.name}</td>
                    <td>{c.last}</td>
                    <td>
                      ₹{c.buy}/₹{c.sell}
                    </td>
                    <td>{c.volume}</td>
                    <td style={{ borderRadius: "0rem 1rem 1rem 0rem" }}>
                      {c.base_unit}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Page;
