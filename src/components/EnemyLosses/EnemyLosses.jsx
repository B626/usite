import React, { useEffect, useState } from "react";
import moment from "moment";
import s from "./EnemyLosses.module.css";

function EnemyLosses() {
  const [enemyLosses, setEnemyLosses] = useState([]);
  const [isLloading, setIsloading] = useState(false);
  const baseUrl = `https://russianwarship.rip/api/v1/statistics/${moment(
    new Date()
  ).format("YYYY-MM-DD")}`;

  async function fetchTasksList() {
    setIsloading(true);
    return fetch(baseUrl)
      .then((res) => res.json())
      .then((response) => {
        setEnemyLosses(response.data);
        setIsloading(false);
      });
  }

  useEffect(() => {
    fetchTasksList();
    console.log(enemyLosses);
  }, []);

  return (
    <div>
      {isLloading && <div className={s.over}></div>}
      <h1>Втрати ворога станом на {moment(new Date()).format("DD-MM-YY")}</h1>
      {enemyLosses.length !== 0 && (
        <ul className={s.losses_list}>
          <li className={s.losses_item}>
            Особового складу: {enemyLosses.stats.personnel_units}
          </li>
          <li className={s.losses_item}>
            ББМ: {enemyLosses.stats.armoured_fighting_vehicles}
          </li>
          <li className={s.losses_item}>Танків: {enemyLosses.stats.tanks}</li>
          <li className={s.losses_item}>
            Арт. систем: {enemyLosses.stats.artillery_systems}
          </li>
          <li className={s.losses_item}>РСЗВ: {enemyLosses.stats.mlrs}</li>
          <li className={s.losses_item}>
            Засобів ППО: {enemyLosses.stats.aa_warfare_systems}
          </li>
          <li className={s.losses_item}>
            Гелікоптерів: {enemyLosses.stats.helicopters}
          </li>
          <li className={s.losses_item}>
            Автотехніки та автоцистерн: {enemyLosses.stats.vehicles_fuel_tanks}
          </li>
          <li className={s.losses_item}>
            БПЛА: {enemyLosses.stats.uav_systems}
          </li>
          <li className={s.losses_item}>
            Кораблів/катерів: {enemyLosses.stats.warships_cutters}
          </li>
          <li className={s.losses_item}>
            Спеціальної техніки: {enemyLosses.stats.special_military_equip}
          </li>
          <li className={s.losses_item}>
            Установок ОТРК/ТРК: {enemyLosses.stats.atgm_srbm_systems}
          </li>
          <li className={s.losses_item}>
            Крилатих ракет: {enemyLosses.stats.cruise_missiles}
          </li>
        </ul>
      )}
    </div>
  );
}

export default EnemyLosses;
