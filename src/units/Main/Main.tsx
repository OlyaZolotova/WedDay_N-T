import "./style.scss";
import { Fade } from "react-awesome-reveal";

export const Main = () => {
  return (
    <Fade triggerOnce={true} duration={3000}>
      <div className="main">
        <div className="container">
          <div className="main__name">
            <h1 className="main__title main__title-top">Николай</h1>
            <h1 className="main__title main__title-middle">8</h1>
            <h1 className="main__title main__title-bottom">Татьяна</h1>
          </div>
          <div className="main__calendar">
            <table>
              <thead>
                <tr>
                  <th>Пн</th>
                  <th>Вт</th>
                  <th>Ср</th>
                  <th>Чт</th>
                  <th>Пт</th>
                  <th>Сб</th>
                  <th>Вс</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="main__july">29</td>
                  <td className="main__july">30</td>
                  <td className="main__july">31</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                  <td>10</td>
                  <td>11</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>13</td>
                  <td>14</td>
                  <td>15</td>
                  <td>16</td>
                  <td>17</td>
                  <td>18</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>20</td>
                  <td>21</td>
                  <td>22</td>
                  <td>23</td>
                  <td>24</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>27</td>
                  <td>28</td>
                  <td>29</td>
                  <td>30</td>
                  <td>31</td>
                  <td className="main__july">1</td>
                </tr>
              </tbody>
            </table>
            <div className="main__imgwrap">
              <div className="main__image">
                <img className="main__img" src="/Vector 9.svg"></img>
              </div>
            </div>
          </div>
          <div className="main__textwrap">
            <p className="main__text main__text-top">August</p>
            <p className="main__text main__text-bottom">2024</p>
          </div>
        </div>
      </div>
    </Fade>
  );
};
