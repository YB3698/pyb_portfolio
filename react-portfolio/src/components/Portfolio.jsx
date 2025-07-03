import { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const navLinks = document.querySelectorAll("nav a");
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    const end = document.getElementsByClassName("content-end")[0];
    const vh = window.innerHeight;
    const sections = ["page1", "page2", "project"];
    const sectionPositions = {};

    function calculatePositions() {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) sectionPositions[id] = el.offsetTop;
      });
    }
    calculatePositions();
    window.addEventListener("resize", calculatePositions);

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const fh = document.body.scrollHeight;

      if (window.innerWidth > 768) {
        // PC 환경: 스크롤에 따라 page1을 숨김
        if (scrollY < vh) {
          page1.style.display = "flex";
          page1.style.pointerEvents = "auto";
        } else {
          page1.style.display = "none";
          page1.style.pointerEvents = "none";
        }
      } else {
        // 모바일 환경: 항상 보여주기
        page1.style.display = "flex";
        page1.style.pointerEvents = "auto";
      }

    if (window.innerWidth > 768) {
      page1.style.display = scrollY < vh ? "flex" : "none";
      page1.style.pointerEvents = scrollY < vh ? "auto" : "none";

      page2.style.position = "relative";  // 항상 자연스럽게 흐르게
      page2.style.top = "auto";
      page2.style.zIndex = "1";
    } else {
      page1.style.display = "flex";
      page1.style.pointerEvents = "auto";
      page2.style.position = "relative";
      page2.style.top = "auto";
      page2.style.zIndex = "1";
    }

    if (window.innerHeight + scrollY >= document.body.scrollHeight - 100) {
      end.style.display = "flex";
      setTimeout(() => end.classList.add("show"), 10);
    } else {
      end.classList.remove("show");
      setTimeout(() => {
        if (!end.classList.contains("show")) end.style.display = "none";
      }, 1000);
    }
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);

        if (targetId === "page1" || targetId === "aboutme") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          if (targetId === "page2") {
            page2.style.position = "relative";
            page2.style.top = "auto";
            page2.style.zIndex = "1";
          }

          const scrollToPos = sectionPositions[targetId];
          if (scrollToPos !== undefined) {
            window.scrollTo({ top: scrollToPos, behavior: "smooth" });
          }
        }
      });
    });

    // cleanup
    return () => {
      window.removeEventListener("resize", calculatePositions);
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#page1">ABOUT ME</a>
          </li>
          <li>
            <a href="#page2">SKILL</a>
          </li>
          <li>
            <a href="#project">PROJECTS</a>
          </li>
        </ul>
      </nav>
      {/* 첫 번째 페이지 */}
      <section id="page1">
        <span className="background-title">BACK-END</span>
        <div className="intro-wrapper">
          <p className="main-text">
            저는 백엔드 신입 개발자 <strong>박유빈</strong> 입니다.
          </p>
          <div className="intro-img">
          </div>
          <p className="sub-text">
            저는 도전을 즐기는 신입 개발자 박유빈입니다.<br />
            새로운 기술들을 배우는 것을 즐기며,<br />
            피드백과 커뮤니케이션을 통해 실력있는 개발자가 되고 싶습니다!
          </p>
          <div className="info">
            <p>
              <strong>🎂 생년월일:</strong> 1999.07.16 <strong>📞 연락처:</strong> 010-3165-3697 <strong>📧 이메일:</strong> dbqls3698@naver.com
            </p>
          </div>
        </div>
        <div id="scroll-down-arrow">▼</div>
      </section>
      {/* 빈 공간: 스크롤 시 두 번째 페이지가 등장할 위치 */}
      <div style={{ height: "100vh" }}></div>
      {/* 두 번째 페이지 */}
      <section id="page2">
       <h2>SKILLS</h2>
        <div className="skills-row">
          <div className="skills-group">
            <h3>Languages</h3>
            <div className="skills-boxes">
              <div className="skill">Python</div>
              <div className="skill">Java</div>
              <div className="skill">JavaScript</div>
              <div className="skill">HTML5</div>
              <div className="skill">CSS</div>
              <div className="skill">SQL</div>
            </div>
          </div>

          <div className="skills-group">
            <h3>Frameworks</h3>
            <div className="skills-boxes">
              <div className="skill">React</div>
              <div className="skill">Spring Boot</div>
            </div>
          </div>

          <div className="skills-group">
            <h3>Tools</h3>
            <div className="skills-boxes">
              <div className="skill">VS Code</div>
              <div className="skill">DBeaver</div>
              <div className="skill">Docker</div>
              <div className="skill">GitHub</div>
              <div className="skill">JupyterLab</div>
              <div className="skill">Qt Designer</div>
            </div>
          </div>
        </div>

      </section>
      {/* 세 번째 페이지 */}
      <section id="project">
        <h2>PROJECT</h2>
        <div className="project-container">
          <div className="project-block">
            <h3 className="project-title">
              <a href="https://github.com/BSEom/miniP_kiosk.git">☕자동 매출 분석 스마트 키오스크☕</a>
            </h3>
            <div className="project-scroll-area">
              <div className="project-item">
                <img alt="home" src="./img/home.png" />
              </div>
              <div className="project-item">
                <img alt="manager" src="./img/manager.png" />
              </div>
              <div className="project-item">
                <img alt="sales" src="./img/sales.png" />
              </div>
              <div className="project-item">
                <img alt="매출관리" src="./img/sales2.png" />
              </div>
            </div>
          </div>
          <div className="project-block">
            <h3 className="project-title">
              <a href="https://github.com/YB3698/team5-baseball-project.git">🥎AI 기반 야구 통계 & 커뮤니티 플랫폼 "야~! 모여"🥎</a>
            </h3>
            <div className="project-scroll-area">
              <div className="project-item">
                <img alt="메인화면" src="./img/baseball_home.png" />
              </div>
              <div className="project-item">
                <img alt="회원가입" src="./img/baseball_login.png" />
              </div>
              <div className="project-item">
                <img alt="경기일정 및 결과" src="./img/baseball_result.png" />
              </div>
              <div className="project-item">
                <img alt="게시판" src="./img/baseball_post.png" />
              </div>
              <div className="project-item">
                <img alt="mypage" src="./img/baseball_mypage.png" />
              </div>
              <div className="project-item">
                <img alt="vote" src="./img/baseball_vote.png" />
              </div>
              <div className="project-item">
                <img alt="신고" src="./img/baseball_pp.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="end">
        <div className="content-end">
          <span className="background-title">Thank You</span>
          <div className="intro-wrapper">
            <p className="main-text-end">끝까지 봐주셔서 감사합니다!</p>
            <p className="sub-text-end">
              아인슈타인은 "배우기를 멈춘 사람은 성장도 멈춘사람이다"라고 말했습니다.<br />
              백엔드 개발자로 성장하기 위해 낯선 기술도 두려워하지 않고 도전하며,<br />
              더 나은 기술을 만드는 개발자가 되고자 꾸준히 노력하겠습니다.
            </p>
            <a className="link" href="https://github.com/YB3698">GitHub</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
