import { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const navLinks = document.querySelectorAll("nav a");
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    const end = document.getElementsByClassName("content-end")[0];
    const vh = window.innerHeight;
    const sections = ["page1", "page2", "interview", "project"];
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

      if (scrollY < vh) {
        page1.style.display = "flex";
        page1.style.pointerEvents = "auto";
      } else {
        page1.style.display = "none";
        page1.style.pointerEvents = "none";
      }

      if (scrollY <= vh) {
        page2.style.position = "fixed";
        page2.style.top = `${vh - scrollY}px`;
        page2.style.left = "0";
        page2.style.width = "100vw";
        page2.style.height = "100vh";
        page2.style.zIndex = "150";
      } else {
        page2.style.position = "relative";
        page2.style.top = "auto";
        page2.style.zIndex = "1";
      }

      if (scrollY >= fh - vh - 150) {
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
            <a href="#interview">INTERVIEW</a>
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
          <div className="intro-img"></div>
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
        <div className="skills-group">
          <h3>Languages</h3>
          <div className="skills-boxes">
            <div className="skill">Python</div>
            <div className="skill">JavaScript</div>
            <div className="skill">SQL</div>
            <div className="skill">HTML5</div>
            <div className="skill">CSS</div>
          </div>
        </div>
        <div className="skills-group">
          <h3>Tools</h3>
          <div className="skills-boxes">
            <div className="skill">VsCode</div>
            <div className="skill">DBeaver</div>
            <div className="skill">Docker</div>
            <div className="skill">GitHub</div>
            <div className="skill">JupyterLab</div>
            <div className="skill">Qt Designer</div>
          </div>
        </div>
      </section>
      {/* 세 번째 페이지 */}
      <section id="interview">
        <h2>Interview</h2>
        <div className="interview-group">
          <div className="question">Q. 개발자가 되고 싶은 이유는?</div>
          <p className="answer">
            저는 경영학과를 졸업해 다양한 계열사가 있는 회사에 들어가 회계·인사·경영지원업무를 담당하며 여러 계열사의 업무 프로세스를 경험할 수 있었습니다.<br />
            그 중 같은 사무실에서 근무했던 개발자들과 가까워지면서 문제를 직접 해결하고 가치를 창출하는 개발분야에 매력을 느껴 공부를 시작했습니다. 처음엔 단순한 호기심으로 시작했지만, 공부를 할수록 재미를 느꼈고 이 분야에서 꾸준히 성장할 수 있겠다는 확신이 들었습니다. 그동안 쌓아온 업무 프로세스에 대한 이해를 바탕으로 현업의 니즈를 정확히 파악한 시스템을 개발하고 싶습니다.<br />
            <strong>단순히 시스템을 사용하는 것을 넘어서 직접 만들고 개선하여 실질적인 가치를 창출하는 개발자가 되는 것이 제 목표입니다.</strong>
          </p>
        </div>
        <div className="interview-group">
          <div className="question">Q. 일할 때 가장 중요하게 생각하는 것은?</div>
          <p className="answer">
            저는 일을 할 때 가장 중요하게 생각하는 것은 <strong>책임감과 정확한 소통</strong> 입니다. 경영지원팀에서 근무할 당시에도 본사에서 다른 지역에 있는 회사를 전담했기 때문에 원활한 소통이 무엇보다 중요했습니다. 작은 일이라도 회사 메신저나 이메일로 관련자들에게 참조를 걸어 실시간으로 상황을 공유했습니다. 그러다보니 소통과 책임감이 더 자연스럽게 몸에 배었습니다.<br />
            특히 개발은 혼자만의 일이 아니라 팀 단위로 협업하는 과정이라고 생각하기 때문에, 항상 소통과 책임을 중심에 두고 일하겠습니다.
          </p>
        </div>
        <div className="interview-group">
          <div className="question">Q. 앞으로의 계획은?</div>
          <p className="answer">
            현재는 자격증 취득과 부경대 빅데이터 기반 개발자 양성과정을 통해 개발자로서의 기반을 다지고 있습니다.<br />
            입사 후에는 실무에 필요한 학습을 최우선으로 하되, 체계적인 성장을 위해 관련 자격증 취득도 병행하며 지속적으로 역량을 쌓아나갈 계획입니다.<br />
            저는 MES 시스템의 실시간 데이터 처리와 제조 현장의 복잡한 요구사항을 효율적으로 구현할 수 있는 전문 개발자로 성장하는 것이 목표입니다.
          </p>
        </div>
      </section>
      {/* 네번째 페이지 */}
      <section id="project">
        <h2>PROJECT</h2>
        <div className="project-container">
          <div className="project-block">
            <h3 className="project-title">
              <a href="https://github.com/BSEom/miniP_kiosk.git">☕카페 키오스크☕</a>
            </h3>
            <div className="project-scroll-area">
              <div className="project-item">
                <img alt="메뉴카테고리조회회" src="./img/project/메뉴카테고리조회.png" />
              </div>
              <div className="project-item">
                <img alt="음료조회" src="./img/project/메뉴조회.png" />
              </div>
              <div className="project-item">
                <img alt="메뉴수정_삭제_주문" src="./img/project/메뉴수정_삭제_주문.png" />
              </div>
              <div className="project-item">
                <img alt="관리자페이지" src="./img/project/관리자 페이지.png" />
              </div>
              <div className="project-item">
                <img alt="관리자페이지-매출조회" src="./img/project/매출조회.png" />
              </div>
            </div>
          </div>
          <div className="project-block">
            <h3 className="project-title">
              <a href="https://github.com/YB3698/portfolio.git">🖥️포토폴리오 사이트🖥️</a>
            </h3>
            <div className="project-scroll-area">
              <div className="project-item">
                <img alt="메인화면" src="./img/project/포폴-main.png" style={{ width: "700px", height: "auto" }} />
                <p>메인화면</p>
              </div>
              <div className="project-item">
                <img alt="기술스택" src="./img/project/포폴-기술스택.png" />
                <p>기술스택</p>
              </div>
              <div className="project-item">
                <img alt="interview" src="./img/project/포폴-interview.png" />
                <p>나에 대한 소개</p>
              </div>
              <div className="project-item">
                <img alt="프로젝트" src="./img/project/포폴-project.png" />
                <p>프로젝트 상세 내용</p>
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
              아이슈타인은 "배우기를 멈춘 사람은 성장도 멈춘사람이다"라고 말했습니다.<br />
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
