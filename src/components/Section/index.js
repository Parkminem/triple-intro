import FadeEnter from "../FadeEnter";
import CountUp from "../CountUp";

const MetricItem = ({ children }) => {
  return (
    <span style={{ color: `3A3A3A`, fontSize: `36px`, letterSpacing: `-1px` }}>
      {children}
    </span>
  );
};

const Description = ({ children }) => {
  return (
    <span
      style={{
        padding: `5px 0px 5px 8px`,
        color: `rgba(58, 58, 58, 0.8)`,
        fontWeight: `bold`,
        fontSize: `14px`,
        lineHeight: `22px`,
      }}
    >
      {children}
    </span>
  );
};

const Section = () => {
  return (
    <div
      style={{
        width: `1200px`,
        height: `552px`,
        margin: `auto`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
      }}
    >
      <FadeEnter startTime={0} duration={700}>
        <div
          style={{
            width: 400,
          }}
        >
          <img src="/assets/triple2x.png" alt="triple" width={400} />
          <div
            style={{
              width: `100%`,
              textAlign: `center`,
              position: `relative`,
              marginTop: `-50px`,
            }}
          >
            <span
              style={{
                fontSize: `15px`,
                color: `rgba(58, 58, 58, 0.7)`,
              }}
            >
              2021년 12월 기준
            </span>
          </div>
        </div>
      </FadeEnter>
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          width: 457,
          gap: `50px`,
        }}
      >
        <FadeEnter startTime={100} duration={700}>
          <div
            style={{ display: `flex`, flexDirection: `column`, gap: `20px` }}
          >
            <MetricItem>
              <b>
                <CountUp number={700} />만 명
              </b>
              의 여행자
            </MetricItem>
            <MetricItem>
              <b>
                <CountUp number={100} />만 개
              </b>
              의 여행리뷰
            </MetricItem>
            <MetricItem>
              <b>
                <CountUp number={470} />만 개
              </b>
              의 여행일정
            </MetricItem>
          </div>
        </FadeEnter>
        <FadeEnter startTime={200} duration={700}>
          <div style={{ display: `flex`, gap: `39px` }}>
            <div style={{ display: `flex` }}>
              <img
                src="/assets/play-store2x.png"
                alt="play-store"
                width={54}
                height={54}
              />
              <Description>
                2018 구글 플레이스토어
                <br />
                올해의 앱 최우수상 수상
              </Description>
            </div>
            <div style={{ display: `flex` }}>
              <img
                src="/assets/badge-apple4x.png"
                alt="badge-apple"
                width={54}
                height={54}
              />
              <Description>
                2018 애플 앱스토어
                <br />
                오늘의 여행앱 선정
              </Description>
            </div>
          </div>
        </FadeEnter>
      </div>
    </div>
  );
};

export default Section;
