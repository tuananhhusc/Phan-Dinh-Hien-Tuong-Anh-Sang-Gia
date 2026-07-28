import TableOfContents from "@/components/TableOfContents";
import ReadingProgress from "@/components/ReadingProgress";
import CitationComponent from "@/components/Citation";
import ShareButtons from "@/components/ShareButtons";

/* ──────────────────────────────────────────
   Helper: inline citation superscript
   ────────────────────────────────────────── */
function C({ n }: { n: string }) {
  const refIndex = parseInt(n) - 1;
  const ref = references[refIndex];
  return <CitationComponent n={n} reference={ref} />;
}

/* ──────────────────────────────────────────
   MAIN PAGE
   ────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <ReadingProgress />

      {/* ═══════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════ */}
      <header className="hero-section py-16 sm:py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Small cross ornament */}
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0s" }}>
            <span className="text-3xl" style={{ color: "var(--color-cardinal)", opacity: 0.25 }}>
              ✦
            </span>
          </div>

          {/* Title */}
          <h1
            className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up opacity-0"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--color-cardinal)",
              animationDelay: "0.15s",
            }}
          >
            Phân Định Tâm Linh
            <br />
            <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl font-medium" style={{ color: "var(--color-cardinal-light)", opacity: 0.85 }}>
              &amp; Hiện Tượng &ldquo;Ánh Sáng Giả&rdquo;
            </span>
          </h1>

          {/* Ornament divider */}
          <div className="hero-ornament animate-fade-in-up opacity-0" style={{ animationDelay: "0.3s" }}>
            <span className="hero-cross">✟</span>
          </div>

          {/* Subtitle */}
          <p
            className="text-base sm:text-lg md:text-xl leading-relaxed animate-fade-in-up opacity-0"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--color-charcoal-light)",
              animationDelay: "0.45s",
              maxWidth: "36rem",
              margin: "0 auto",
            }}
          >
            Khảo luận về những an ủi giả của sự dữ — Một nghiên cứu liên ngành
            giữa Thần học Tu đức Inhaxiô, Tâm lý học Siêu cá nhân, và Triết
            học Hiện sinh
          </p>

          {/* Meta info */}
          <div
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs tracking-wide uppercase animate-fade-in-up opacity-0"
            style={{
              fontFamily: "var(--font-ui)",
              color: "var(--color-charcoal-muted)",
              animationDelay: "0.6s",
            }}
          >
            <span>Báo cáo Nghiên cứu</span>
            <span style={{ color: "var(--color-gold)", opacity: 0.5 }}>•</span>
            <span>Nghiên cứu Liên ngành</span>
            <span style={{ color: "var(--color-gold)", opacity: 0.5 }}>•</span>
            <span className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              Thời gian đọc: ~15 phút
            </span>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════
          MAIN CONTENT WITH SIDEBAR
          ═══════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex gap-8 lg:gap-12 justify-center">
          {/* Table of Contents - Desktop Sidebar */}
          <TableOfContents />

          {/* Article Body */}
          <main className="article-content max-w-3xl w-full min-w-0">

            {/* ═══════════════════════════════════
                SECTION 1
                ═══════════════════════════════════ */}
            <section id="section-1">
              <h2>1. Dẫn nhập về nghệ thuật phân định trong hệ hình phức hợp của đời sống nội tâm</h2>

              <p>
                Trong không gian nghiên cứu về linh đạo, thần học tu đức và phân tâm học hiện sinh,
                đời sống nội tâm của con người chưa bao giờ được giới thuyết như một quỹ đạo tuyến tính
                đơn giản. Thay vào đó, nó hiện diện như một chuỗi những phức hợp đan xen, nơi các
                khuynh hướng tự nhiên, động lực vô thức và những tác động đa chiều từ môi trường liên
                tục va chạm. Nổi bật trong hệ thống tri thức nhằm giải mã mớ bòng bong này là nghệ
                thuật &ldquo;phân định&rdquo; (<em>discernment</em>), một tiến trình nhận thức và tâm linh cốt
                lõi nhằm định vị chân lý giữa vô vàn những tiếng nói nội tâm<C n="1" />.
              </p>

              <p>
                Tuy nhiên, một trong những nghịch lý lớn nhất và cũng là thách thức cam go nhất của đời
                sống tinh thần chính là sự hiện diện của những &ldquo;ánh sáng giả&rdquo; – những trạng
                thái tưởng chừng như mang lại sự an ủi, bình an và thánh thiện, nhưng thực chất lại là
                những mưu chước tinh vi của sự lừa dối<C n="1" />. Chúng dẫn dắt con người vào trạng thái tự
                huyễn hoặc, đóng kín tâm hồn và dần xa rời thực tại dưới một vỏ bọc vô cùng hoàn
                hảo<C n="4" />.
              </p>

              <p>
                Báo cáo nghiên cứu chuyên sâu này nhằm mục đích mổ xẻ hiện tượng &ldquo;khi ánh sáng
                cũng có thể giả&rdquo; thông qua một cách tiếp cận liên ngành. Bằng việc hội tụ ba trụ
                cột tri thức chính: (1) Thần học tu đức về Phân định thần khí của Thánh Inhaxiô Loyola
                (<em>Ignatian Discernment</em>), (2) Tâm lý học siêu cá nhân (<em>Transpersonal
                Psychology</em>) với khái niệm &ldquo;Né tránh tâm linh&rdquo; (<em>Spiritual
                Bypassing</em>) của John Welwood, và (3) Triết học Hiện sinh của Jean-Paul Sartre với
                khái niệm &ldquo;Ngụy tín&rdquo; (<em>Mauvaise Foi</em>), nghiên cứu sẽ làm rõ cơ chế
                vận hành của những &ldquo;an ủi giả&rdquo;. Quá trình tổng hợp này không chỉ cung cấp
                một hệ thống lý luận vững chắc để nhận diện sự tinh vi của cái ác khi nó mang chiếc
                mặt nạ của sự thiện hảo, mà còn phác họa con đường đạt tới sự tự do nội tâm đích thực.
              </p>
            </section>

            <div className="section-divider"><span style={{ color: "var(--color-gold)", fontSize: "0.75rem" }}>✦</span></div>

            {/* ═══════════════════════════════════
                SECTION 2
                ═══════════════════════════════════ */}
            <section id="section-2">
              <h2>2. Chiều kích lịch sử và Thần học Kinh Thánh về Phân định Thần khí</h2>

              <p>
                Khái niệm phân định không phải là một phát kiến của thời đại mới, mà có cội rễ sâu xa
                từ trong truyền thống Kinh Thánh và lịch sử của Giáo hội. Ngay từ những trang đầu tiên
                của Cựu Ước, con người đã phải đối diện với sự giằng co giữa tiếng nói của Thiên Chúa
                và tiếng nói của sự dữ (Satan) trong vườn Địa Đàng, buộc họ phải đưa ra các quyết định
                luân lý mang tính sinh tử<C n="6" />. Lịch sử cứu độ liên tục ghi nhận những hiện tượng
                thần khí tác động lên con người, từ việc Thiên Chúa linh ứng cho các ngôn sứ như
                Ba-la-am, cho đến việc thần khí Đức Chúa rời bỏ vua Sa-ul để nhường chỗ cho một thần
                khí xấu đến ám ảnh vị vua này<C n="6" />.
              </p>

              <p>
                Bước sang Tân Ước, nhu cầu phân định càng trở nên cấp thiết khi Chúa Giêsu liên tục
                cảnh báo về các ngôn sứ giả đội lốt chiên hiền lành nhưng bên trong là sói dữ tham
                mồi<C n="1" />. Đỉnh cao của sự cảnh giác này được Thánh Phaolô đúc kết trong Thư thứ hai
                gửi tín hữu Cô-rin-tô (2 Cr 11, 14), khi ngài vạch trần thủ đoạn tinh vi nhất của ác
                thần:
              </p>

              <blockquote>
                <p>&ldquo;Chính Xa-tan cũng đội lốt thiên thần sáng láng!&rdquo;<C n="1" /></p>
              </blockquote>

              <p>
                Để đối phó với thực tại phức tạp này, ơn &ldquo;phân định thần khí&rdquo; (<em>Diakrisis
                tōn pneumatōn</em>) được Thánh Phaolô liệt kê như một trong những đặc sủng quan trọng
                nhất mà Chúa Thánh Thần ban cho Giáo hội, nhằm giúp cộng đoàn cân nhắc mọi sự và giữ
                lại điều tốt lành<C n="2" />. Thánh Gioan Tông đồ cũng khuyên nhủ các tín hữu đừng vội
                tin cứ thần khí nào, nhưng hãy cẩn trọng cân nhắc xem chúng có thực sự bắt nguồn từ
                Thiên Chúa hay không<C n="3" />.
              </p>

              <p>
                Truyền thống này tiếp tục được nuôi dưỡng và thực hành nghiêm ngặt bởi các Giáo phụ sa
                mạc, những người đã phát triển một nghệ thuật phân định sâu sắc thông qua đời sống khổ
                hạnh và chiêm niệm<C n="6" />. Tuy nhiên, phải đến thế kỷ XVI, hệ thống phân định mới
                được kiến tạo thành một phương pháp luận sư phạm hoàn chỉnh và vi tế nhất dưới ngòi
                bút của Thánh Inhaxiô Loyola.
              </p>
            </section>

            <div className="section-divider"><span style={{ color: "var(--color-gold)", fontSize: "0.75rem" }}>✦</span></div>

            {/* ═══════════════════════════════════
                SECTION 3
                ═══════════════════════════════════ */}
            <section id="section-3">
              <h2>3. Cội nguồn kinh nghiệm và Động lực học nội tâm của Thánh Inhaxiô Loyola</h2>

              <p>
                Sự ra đời của bộ quy tắc phân định thần loại không xuất phát từ những suy lý trừu
                tượng, mà được kết tinh từ chính máu, nước mắt và cuộc khủng hoảng hiện sinh sâu sắc
                của I-nhã<C n="8" />.
              </p>

              <h3>3.1. Từ sự sụp đổ của bản ngã đến sự bừng sáng của ân sủng</h3>

              <p>
                Năm 1521, tại trận chiến Pamplona, một viên đạn đại bác đã đánh gãy chân I-nhã, đồng
                thời đập tan mọi tham vọng công danh, binh nghiệp và những mộng tưởng hiệp sĩ lãng mạn
                của ngài tại triều đình Tây Ban Nha<C n="8" />. Trong những tháng ngày dưỡng bệnh đầy đau
                đớn tại lâu đài Loyola, I-nhã bắt đầu đọc các sách về cuộc đời Chúa Giêsu và các
                thánh, xen kẽ với việc hồi tưởng lại những cuốn tiểu thuyết hiệp sĩ<C n="8" />. Chính tại
                giường bệnh này, ngài đã khám phá ra nền tảng của sự phân định: ngài nhận thấy rằng khi
                nghĩ về những chiến công trần tục, ngài cảm thấy thích thú nhất thời, nhưng sau đó tâm
                hồn lại rơi vào trạng thái khô khan, trống rỗng và buồn bã; ngược lại, khi nghĩ đến
                việc bắt chước các thánh để phục vụ Thiên Chúa, sự bình an và niềm vui nội tâm vẫn tiếp
                tục tồn tại rất lâu sau đó<C n="11" />.
              </p>

              <p>
                Tuy nhiên, cuộc hành trình không dừng lại ở những an ủi ban đầu. Khi bước vào đời sống
                ẩn tu tại Manresa, I-nhã đã trải qua một cuộc khủng hoảng tâm linh trầm trọng. Ngài bị
                dằn vặt bởi sự bối rối, mặc cảm tội lỗi trong quá khứ, lo lắng về tương lai, và những
                giờ cầu nguyện trở nên khô khan tột độ<C n="9" />. Sự sầu khổ thiêng liêng tàn khốc đến
                mức ngài đã chán ngán cuộc sống và bị cám dỗ tự tử<C n="9" />. Chỉ sau khi trải qua tận
                cùng của đêm tối tâm hồn, buông bỏ mọi nỗ lực tự thân và phó thác hoàn toàn cho ân
                sủng, I-nhã mới đón nhận được những ánh sáng huyền nhiệm bên bờ sông Cardoner. Biến cố
                Cardoner là một ơn ngoại thường, thâu tóm và soi sáng toàn bộ kinh nghiệm nội tâm của
                ngài, trở thành nền tảng để ngài viết nên cuốn Linh Thao, một cẩm nang vô giá về việc
                nhận diện tác động của các thần khí<C n="1" />.
              </p>

              <h3>3.2. Bản thể luận của An ủi và Sầu khổ thiêng liêng</h3>

              <p>
                Dưới lăng kính Inhaxiô, mọi quyết định, ý tưởng và xu hướng nội tâm đều chịu sự chi
                phối của các &ldquo;thần khí&rdquo; – hiểu theo nghĩa rộng là các chuyển động của tâm
                hồn, bao gồm sự thúc đẩy từ Thiên Chúa (thần lành), từ bản thể sa ngã của con người,
                và từ Xa-tan (thần dữ)<C n="6" />. Tiến trình phân định xoay quanh việc nhận diện hai
                thái cực căn bản: <strong>An ủi thiêng liêng</strong> (<em>Consolation</em>) và{" "}
                <strong>Sầu khổ thiêng liêng</strong> (<em>Desolation</em>)<C n="1" />.
              </p>

              <p>
                <strong>An ủi thiêng liêng</strong> không thể bị giản lược thành những cảm xúc tâm lý
                tích cực, sự phấn chấn tự nhiên hay hệ quả của một ngày thời tiết đẹp<C n="1" />. Đây là
                một chuyển động nội tâm mang tính siêu việt, tạo ra sự bình an sâu thẳm, làm gia tăng
                đức tin, đức cậy và đức mến. Nó hướng tâm hồn vươn lên những thực tại cao cả, khơi dậy
                niềm vui nội tâm kêu gọi con người hướng về ơn cứu độ và sự kết hiệp với Đấng Tạo
                Hóa<C n="1" />. Đức Thánh Cha Phanxicô, trong loạt bài giáo lý về phân định, đã diễn giải
                rằng sự an ủi thực sự mang lại một sức mạnh nội tâm phi thường, giúp con người mạnh dạn
                tiến bước và thực hiện những điều tốt đẹp mà trong thời kỳ tăm tối họ không bao giờ dám
                nghĩ tới<C n="15" />. Sự an ủi không gây ra bạo lực đối với tâm trí, mà là một sức mạnh
                tích cực, dịu dàng làm nảy mầm những tình cảm tốt đẹp và định hướng cuộc sống về phía
                hy vọng<C n="14" />.
              </p>

              <p>
                Ngược lại, <strong>sầu khổ thiêng liêng</strong> là sự hoang mang, tăm tối của linh hồn.
                Nó biểu hiện qua cảm giác xáo trộn, nghi ngờ, lười biếng thiêng liêng, và cảm giác xa
                cách Thiên Chúa một cách tột độ<C n="16" />. Trong trạng thái này, linh hồn cảm thấy nặng
                nề, bị cuốn hút vào những thực tại trần tục thấp kém, mất đi phương hướng và đánh mất
                ba nhân đức đối thần (tin, cậy, mến)<C n="16" />. Sầu khổ là công cụ hữu hiệu của ác thần
                nhằm làm nản lòng những người đang nỗ lực vươn tới sự thánh thiện<C n="8" />.
              </p>

              <p>
                Về mặt thần học, Thánh Inhaxiô chỉ ra ba nguyên nhân cốt lõi khiến Thiên Chúa cho phép
                linh hồn trải qua sự sầu khổ thiêng liêng. <em>Thứ nhất</em>, do sự hâm hẩm, lười biếng
                và chểnh mảng của chính con người trong các thực hành đạo đức, khiến ân sủng bị rút lui.{" "}
                <em>Thứ hai</em>, đây là một cuộc thử thách (giống như lửa thử vàng) mà Thiên Chúa gửi
                đến để đánh giá giá trị và sự tiến bộ thực sự của linh hồn, xem con người có kiên trì
                khi không còn những phần thưởng cảm xúc hay không. <em>Thứ ba</em>, sự sầu khổ mang lại
                cho con người một tri thức và sự hiểu biết chân thật rằng họ không thể tự mình tạo ra
                hoặc duy trì sự sốt sắng, lòng sùng kính hay tình yêu nồng nhiệt; tất cả đều là ân
                sủng vô nhưng của Thiên Chúa, từ đó triệt tiêu thói kiêu ngạo thiêng liêng và củng cố
                lòng khiêm nhường<C n="16" />.
              </p>
            </section>

            <div className="section-divider"><span style={{ color: "var(--color-gold)", fontSize: "0.75rem" }}>✦</span></div>

            {/* ═══════════════════════════════════
                SECTION 4
                ═══════════════════════════════════ */}
            <section id="section-4">
              <h2>4. Sự chuyển dịch mô thức và Mưu chước &ldquo;Thiên thần sáng láng&rdquo;</h2>

              <p>
                Hệ thống phân định của Linh Thao được thiết kế tinh vi theo từng cấp độ tiến triển của
                linh hồn, được chia thành hai nhóm quy tắc chính: <strong>Quy tắc Tuần Thứ
                Nhất</strong> và <strong>Quy tắc Tuần Thứ Hai</strong><C n="1" />.
              </p>

              <p>
                Đối với những người mới bắt đầu hoặc đang trong giai đoạn thanh luyện (Tuần Thứ Nhất),
                chiến thuật của ác thần rất thô thiển và dễ nhận diện. Nó trực tiếp gây ra sự sầu khổ
                thiêng liêng, tạo ra những chướng ngại vật rõ ràng, hoặc khơi dậy những khoái lạc giác
                quan và ảo tưởng phù phiếm để lôi kéo họ trở lại con đường tội lỗi<C n="16" />. Tuy
                nhiên, khi một linh hồn đã trưởng thành về mặt thiêng liêng, quyết tâm từ bỏ tội lỗi
                và tiến bước vững vàng trong sự thiện (Tuần Thứ Hai), ác thần nhận ra rằng những cám dỗ
                thô thiển hay sự sầu khổ sẽ lập tức bị phát hiện và cự tuyệt. Do đó, nó phải thay đổi
                hoàn toàn chiến thuật, chuyển từ việc tấn công trực diện sang sự lừa dối tinh vi<C n="1" />.
              </p>

              <p>
                Đây chính là lúc mưu chước <strong>&ldquo;Thiên thần sáng láng&rdquo;</strong> (<em>sub
                angelo lucis</em>) được kích hoạt. Trong Quy tắc 4 của Tuần Thứ Hai (Linh Thao số 332),
                Thánh Inhaxiô cảnh báo rằng đặc điểm của ác thần là giả dạng thành thiên thần ánh sáng,
                đi vào theo cách thức của linh hồn sốt mến nhưng lại đi ra theo cách của chính
                nó<C n="12" />. Kẻ thù không xúi giục làm điều ác ngay lập tức, mà ngược lại, nó đề xuất
                những tư tưởng rất tốt lành, thánh thiện, hoàn toàn phù hợp với lòng khao khát đạo đức
                của linh hồn công chính<C n="1" />.
              </p>

              <p>
                Cơ chế thâm nhập này vô cùng tinh xảo. Ví dụ, ác thần có thể thúc đẩy một người đã có
                gia đình dành toàn bộ thời gian rảnh rỗi để làm công việc thiện nguyện tại giáo xứ hoặc
                cộng đoàn. Công việc này tự thân nó rất thánh thiện và được mọi người ca ngợi. Nhưng dần
                dần, sự dấn thân quá mức này khiến người đó bỏ bê trách nhiệm làm chồng, làm cha, dẫn
                đến sự rạn nứt trong gia đình, vốn là ơn gọi chính yếu mà Thiên Chúa dành cho
                họ<C n="16" />. Hoặc nó có thể thôi thúc một tu sĩ thực hành những hình thức khổ chế vượt
                quá sức chịu đựng, dưới lớp vỏ bọc của lòng sốt sắng, để rồi cuối cùng dẫn đến sự suy
                kiệt thể chất, tổn thương tâm lý, và sinh ra lòng kiêu ngạo, coi thường những người
                anh em khác<C n="23" />. Từng chút một, ác thần lôi kéo linh hồn ra khỏi lộ trình bình an
                ban đầu, vướng vào những mưu mô ẩn kín và các ý định tồi tệ, biến sự tốt lành bề ngoài
                thành sự hư hỏng thiêng liêng bên trong<C n="1" />.
              </p>
            </section>

            <div className="section-divider"><span style={{ color: "var(--color-gold)", fontSize: "0.75rem" }}>✦</span></div>

            {/* ═══════════════════════════════════
                SECTION 5
                ═══════════════════════════════════ */}
            <section id="section-5">
              <h2>5. Biện chứng nguyên nhân: Chìa khóa vạch trần &ldquo;An ủi giả&rdquo;</h2>

              <p>
                Để cung cấp một bộ công cụ phân định sắc bén nhằm nhận diện các an ủi giả tạo này, nền
                thần học thiêng liêng Inhaxiô phân biệt hai loại hình an ủi dựa trên tiêu chí
                &ldquo;nguyên nhân phát sinh&rdquo;. Đây là cốt lõi của sự phân định trong Tuần Thứ
                Hai<C n="10" />.
              </p>

              <p>
                Bảng dưới đây hệ thống hóa sự khác biệt mang tính bản thể luận giữa hai loại an ủi
                thiêng liêng:
              </p>

              {/* ── TABLE 1: Comparison of Consolation Types ── */}
              <div className="comparison-table-wrapper">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Phân loại</th>
                      <th>Bản chất và Biểu hiện Lâm sàng</th>
                      <th>Tác nhân Khởi xướng</th>
                      <th>Tiến trình Phân định và Ứng phó</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>An ủi không có nguyên nhân trước</td>
                      <td>
                        Một kinh nghiệm thiêng liêng mang tính siêu việt, xảy ra đột ngột mà không có
                        bất kỳ đối tượng, khái niệm, sự suy luận, hay tác nhân kích thích ngoại cảnh
                        nào đi trước. Tâm hồn bỗng nhiên được đổ đầy tình yêu sáng tỏ đối với Đấng Tạo
                        Hóa<C n="8" />.
                      </td>
                      <td>
                        Chỉ duy nhất Thiên Chúa. Ác thần hay bản ngã hoàn toàn bất lực trong việc tạo
                        ra trạng thái này vì chúng không thể can thiệp trực tiếp vào hiện thể nội tại
                        của linh hồn<C n="8" />.
                      </td>
                      <td>
                        Là dấu chỉ chắc chắn, tuyệt đối an toàn và không thể bị giả mạo. Con người có
                        thể tin tưởng và đón nhận nó bằng toàn bộ ý chí mà không cần do dự<C n="10" />.
                      </td>
                    </tr>
                    <tr>
                      <td>An ủi có nguyên nhân trước</td>
                      <td>
                        Phát sinh như một hệ quả trực tiếp sau một hành động cụ thể: nghe một bài giảng
                        hùng hồn, đọc một đoạn Kinh Thánh cảm động, chứng kiến một nghĩa cử anh hùng,
                        hoặc thực hành các suy luận logic<C n="8" />.
                      </td>
                      <td>
                        Có thể bắt nguồn từ Thiên Chúa (dùng phương tiện tự nhiên), từ bản ngã con
                        người (cảm xúc tâm lý), hoặc từ ác thần (thao túng và ngụy tạo)<C n="8" />.
                      </td>
                      <td>
                        Đòi hỏi sự soi xét, nghi ngờ và cân nhắc vô cùng cẩn trọng. Kẻ thù thường len
                        lỏi vào giai đoạn sau của loại an ủi này để biến nó thành &ldquo;an ủi
                        giả&rdquo; nhằm đánh lừa chủ thể<C n="10" />.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Bởi lẽ ác thần không có thẩm quyền và năng lực để tác động trực tiếp tạo ra niềm an ủi
                không có nguyên nhân, toàn bộ mặt trận lừa dối của nó tập trung vào các an ủi có nguyên
                nhân<C n="1" />. Bằng cách lợi dụng quy luật tâm lý, trí tưởng tượng và những lý lẽ ngụy
                biện, sự dữ tạo ra một lớp vỏ bọc bình an và hưng phấn giả tạo, hay còn gọi là
                &ldquo;ảo giác thiêng liêng&rdquo;, để lèo lái những tâm hồn thiện chí đi sai
                đường<C n="10" />.
              </p>
            </section>

            <div className="section-divider"><span style={{ color: "var(--color-gold)", fontSize: "0.75rem" }}>✦</span></div>

            {/* ═══════════════════════════════════
                SECTION 6
                ═══════════════════════════════════ */}
            <section id="section-6">
              <h2>6. Lăng kính Tâm lý học Siêu cá nhân: Hội chứng &ldquo;Né tránh tâm linh&rdquo;</h2>

              <p>
                Nghiên cứu về sự lừa dối nội tâm và những &ldquo;ánh sáng giả&rdquo; sẽ thiếu đi tính
                toàn diện nếu không được đối chiếu với các khám phá của tâm lý học hiện đại. Điều mà
                truyền thống thần học tu đức gọi là &ldquo;thiên thần sáng láng&rdquo; hay &ldquo;an ủi
                giả&rdquo; thực chất có một sự tương đồng lâm sàng sâu sắc với hội chứng
                &ldquo;<em>Spiritual Bypassing</em>&rdquo; (tạm dịch: Né tránh tâm linh hay Trốn tránh
                bằng tâm linh)<C n="28" />.
              </p>

              <p>
                Thuật ngữ này được nhà tâm lý trị liệu siêu cá nhân <strong>John Welwood</strong> định
                hình lần đầu tiên vào đầu thập niên 1980. Welwood định nghĩa &ldquo;né tránh tâm
                linh&rdquo; là khuynh hướng nguy hiểm khi con người lạm dụng các lý niệm, niềm tin, và
                thực hành tâm linh nhằm mục đích lảng tránh, che đậy hoặc từ chối đối mặt với những tổn
                thương tâm lý chưa được giải quyết, những cảm xúc tiêu cực, và các trách nhiệm thực tế
                trong đời sống<C n="28" />. Hiện tượng này cung cấp một cơ chế phòng vệ vô cùng tinh vi,
                tạo ra một lớp vỏ bọc an toàn khiến người thực hành tự dối mình rằng họ đã &ldquo;vượt
                thoát&rdquo; khỏi những vấn đề trần tục, trong khi thực chất họ chỉ đang đè nén chúng
                vào sâu trong vô thức<C n="28" />.
              </p>

              <h3>6.1. Triệu chứng học của sự lẩn tránh bằng bình phong tôn giáo</h3>

              <p>
                Các nghiên cứu lâm sàng và quan sát thực nghiệm đã lập danh mục hàng loạt các triệu
                chứng đặc trưng của hội chứng né tránh tâm linh<C n="28" />:
              </p>

              <p>
                <strong>Đầu tiên</strong> là hội chứng &ldquo;Tích cực độc hại&rdquo; (<em>Toxic
                Positivity</em>). Những người rơi vào cạm bẫy này luôn phủ lên mọi hoàn cảnh một lăng
                kính lạc quan quá mức, ngó lơ thực tại đắng cay. Họ sử dụng các khẩu hiệu tâm linh như
                &ldquo;mọi chuyện xảy ra đều có lý do của nó&rdquo;, &ldquo;đây là những bài học vũ trụ
                gửi đến&rdquo;, hoặc &ldquo;vui lên mà sống&rdquo; để bịt miệng những tiếng khóc của sự
                tổn thương<C n="28" />. Sự lạc quan này không phát xuất từ một niềm hy vọng đích thực, mà
                là một thủ thuật đè nén để không phải làm việc với nỗi đau.
              </p>

              <p>
                <strong>Thứ hai</strong> là việc chối bỏ và đàn áp các cảm xúc căn bản, điển hình nhất
                là sự tức giận. Họ nhầm tưởng rằng những cảm xúc tự nhiên, tiêu cực của con người là
                dấu hiệu của sự thấp kém về mặt tâm linh, và cho rằng mình phải &ldquo;vượt lên
                trên&rdquo; chúng<C n="28" />. Hậu quả là những năng lượng này không bị tiêu hủy mà
                chuyển hóa thành sự cay đắng ngầm, sự ách tắc cảm xúc, hoặc bị phóng chiếu
                (<em>projection</em>) lên những người xung quanh<C n="28" />.
              </p>

              <p>
                <strong>Thứ ba</strong>, né tránh tâm linh là công cụ hoàn hảo để biện minh cho sự vô
                trách nhiệm và thao túng tâm lý. Nhiều cá nhân lấy danh nghĩa &ldquo;nhân quả&rdquo;,
                &ldquo;thánh ý&rdquo; hay &ldquo;sự buông bỏ&rdquo; để không phải thực hiện các nghĩa
                vụ xã hội, gia đình, hoặc lấp liếm những sai lầm cá nhân<C n="30" />. Đây chính là sự
                &ldquo;khép kín nơi bản thân&rdquo; mà phân định thần khí đã cảnh báo; họ đi tìm sự an
                ủi ám ảnh cho riêng mình mà quên đi tình yêu thương và sự dấn thân vì tha
                nhân<C n="33" />.
              </p>

              <p>
                <strong>Cuối cùng</strong>, nguy hiểm nhất là <strong>Chủ nghĩa ái kỷ tâm
                linh</strong> (<em>Spiritual Narcissism</em>). Người thực hành bắt đầu tin vào sức mạnh
                tối thượng và sự ưu việt về đạo đức của bản thân. Họ tự đặt mình ở một vị thế cao siêu,
                tách rời khỏi thế giới tục lụy, từ đó nảy sinh thái độ phán xét kiêu ngạo đối với
                những người mà họ cho là &ldquo;chưa thức tỉnh&rdquo; hay &ldquo;chưa giác
                ngộ&rdquo;<C n="28" />.
              </p>

              <h3>6.2. Đối chiếu: Chữa lành đích thực và Sự giả tạo tâm linh</h3>

              <p>
                Để làm rõ sự nguy hại của ánh sáng giả dưới vỏ bọc tâm linh, cần có sự phân định rạch
                ròi giữa tiến trình chữa lành thực sự và cơ chế né tránh.
              </p>

              {/* ── TABLE 2: Authentic Healing vs Spiritual Bypassing ── */}
              <div className="comparison-table-wrapper">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Tiêu chí</th>
                      <th>Chữa lành Tâm linh và Tâm lý Đích thực</th>
                      <th>Né tránh Tâm linh / An ủi giả</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Thái độ đối diện với Đau khổ</td>
                      <td>
                        Đòi hỏi sự can đảm đối diện trực tiếp với tổn thương (<em>Shadow Work</em>).
                        Chấp nhận, phân tích nguồn gốc và xuyên qua nỗi đau để đạt được sự chuyển hóa
                        sâu sắc<C n="29" />.
                      </td>
                      <td>
                        Sử dụng tâm linh như một liều thuốc tê. Phủ nhận, đè nén nỗi đau, tảng lờ các
                        vết thương nội tâm và bọc chúng bằng lớp vỏ tích cực giả tạo<C n="30" />.
                      </td>
                    </tr>
                    <tr>
                      <td>Sự phát triển của Bản ngã</td>
                      <td>
                        Hướng tới sự suy giảm cái tôi ích kỷ, tăng trưởng sự khiêm tốn, nhận thức rõ
                        những giới hạn của bản thân và sống hòa nhịp với cộng đồng<C n="18" />.
                      </td>
                      <td>
                        Bơm phồng một &ldquo;cái tôi siêu linh&rdquo; (ái kỷ tâm linh). Nuôi dưỡng sự
                        kiêu ngạo thiêng liêng, ảo tưởng về sự toàn thiện và tự cho mình quyền phán
                        xét người khác<C n="23" />.
                      </td>
                    </tr>
                    <tr>
                      <td>Hệ quả trong Đời sống Thực tế</td>
                      <td>
                        Mang lại sự tự do nội tâm đích thực. Dám chịu trách nhiệm cho các hành động
                        của mình, yêu thương tha nhân cách quảng đại và dấn thân vào thực tại<C n="18" />.
                      </td>
                      <td>
                        Dẫn đến sự thoái thác trách nhiệm, tách rời vô cảm với hiện thực, đồng lệ
                        thuộc, và thường xuyên đưa ra các quyết định ngụy biện gây tổn hại cho bản thân
                        và người khác<C n="28" />.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Sự phân tích này hoàn toàn cộng hưởng với những quan sát của <strong>Thánh Gioan Thánh
                Giá</strong> về sự &ldquo;kiêu ngạo thiêng liêng&rdquo; và &ldquo;nhục dục thiêng
                liêng&rdquo; nơi những người mới chập chững bước vào đời sống tu đức. Nhiều người quá
                gắn bó với vị ngọt khả giác (sự an ủi bề mặt) khi thực hành đạo đức, coi đó như một
                mục đích tự tại chứ không phải là phương tiện để đạt tới Thiên Chúa<C n="23" />. Họ phô
                diễn các hành vi khổ chế bên ngoài thái quá nhằm dung dưỡng thói kiêu ngạo, nhưng bên
                trong lại kiên quyết từ chối việc hy sinh ý chí và phán đoán cá nhân<C n="23" />. Do đó,
                bóng tối tâm linh hay sự sầu khổ không phải lúc nào cũng là hình phạt; ngược lại, đôi
                khi Thiên Chúa rút lại những &ldquo;an ủi&rdquo; này để thanh lọc linh hồn, phá vỡ cấu
                trúc &ldquo;né tránh tâm linh&rdquo;, buộc họ phải đối mặt với sự thật trần trụi của
                chính mình và học cách yêu mến cách vô vị lợi<C n="23" />.
              </p>
            </section>

            <div className="section-divider"><span style={{ color: "var(--color-gold)", fontSize: "0.75rem" }}>✦</span></div>

            {/* ═══════════════════════════════════
                SECTION 7
                ═══════════════════════════════════ */}
            <section id="section-7">
              <h2>7. Triết học Hiện sinh: Sự Ngụy tín và Bi kịch Khước từ Tự do</h2>

              <p>
                Vượt lên trên cả chiều kích thần học và tâm lý, nguyên nhân sâu xa nhất dẫn đến việc
                con người dễ dàng rơi vào bẫy của &ldquo;an ủi giả&rdquo; có thể được giải mã thông
                qua lăng kính bản thể luận của triết học hiện sinh, đặc biệt là triết thuyết của
                <strong> Jean-Paul Sartre</strong> về sự &ldquo;Ngụy tín&rdquo; (<em>Mauvaise Foi / Bad
                Faith</em>)<C n="38" />.
              </p>

              <h3>7.1. Tự do tuyệt đối và Nỗi lo âu hiện sinh</h3>

              <p>
                Khởi đi từ luận điểm trung tâm &ldquo;<em>Hiện hữu có trước bản
                chất</em>&rdquo; (<em>L&apos;existence précède l&apos;essence</em>), Sartre khẳng định rằng con
                người không được sinh ra với một kịch bản hay số phận được định đoạt sẵn<C n="38" />.
                Khác với các sự vật vô tri (<em>Tồn-tại-tự-mình / En-soi</em>) vốn đầy đặc và tĩnh
                tại, con người là một &ldquo;<em>Tồn-tại-cho-mình</em>&rdquo; (<em>Pour-soi</em>),
                mang trong cấu trúc của ý thức một khoảng trống của hư vô<C n="41" />. Khoảng trống này
                chính là cội nguồn của tự do. Con người, do đó, &ldquo;bị kết án phải tự do&rdquo; – họ
                bị ném vào một thế giới phi lý và bị buộc phải tự mình kiến tạo nên ý nghĩa cuộc đời
                thông qua từng lựa chọn và hành động<C n="38" />.
              </p>

              <p>
                Tuy nhiên, tự do đi liền với trách nhiệm tuyệt đối<C n="38" />. Đối diện với biển cả vô
                định của những khả thể, và nhận thức rằng không có bất kỳ hệ quy chiếu đạo đức tiên
                nghiệm nào bảo lãnh cho hành động của mình, con người rơi vào trạng thái &ldquo;lo
                âu&rdquo; (<em>angoisse</em>) tột độ. Nỗi lo âu này không phải là sự sợ hãi trước một
                đối tượng cụ thể, mà là sự run rẩy mang tính hữu thể học trước sức nặng của chính tự
                do và trách nhiệm của mình<C n="38" />.
              </p>

              <h3>7.2. Ngụy tín: Nghệ thuật tự lừa dối mình</h3>

              <p>
                Để trốn chạy khỏi nỗi lo âu xé rách tâm can này, con người kiến tạo ra
                &ldquo;Ngụy tín&rdquo; – một cơ chế tự lừa dối bản thân tinh vi<C n="38" />. Nếu nói
                dối (<em>lie</em>) đòi hỏi sự hiện diện của hai chủ thể tách biệt (người lừa dối và
                người bị lừa), thì ngụy tín là sự dối trá diễn ra ngay trong nội bộ một ý thức thống
                nhất, nơi chủ thể vừa là kẻ tung hỏa mù vừa là nạn nhân tự nguyện<C n="39" />.
              </p>

              <p>
                Người ngụy tín chối bỏ tự do của mình bằng cách tự thuyết phục rằng họ là một thực thể
                tĩnh tại (<em>En-soi</em>) – một nạn nhân thụ động bị chi phối hoàn toàn bởi hoàn cảnh
                khách quan, bởi các quy tắc cứng nhắc của xã hội, hoặc bởi những nhãn mác mà người
                khác gán cho họ<C n="38" />. Bằng cách đổ lỗi cho &ldquo;số phận&rdquo;, &ldquo;hoàn cảnh
                không cho phép&rdquo;, hay &ldquo;thời thế phải thế&rdquo;, họ tước bỏ quyền tự quyết
                của mình để đổi lấy một sự bình an giả tạo, không còn phải gánh vác trách nhiệm cho
                các lựa chọn<C n="38" />. Sartre tàn nhẫn lột trần sự ngụy tín này, gọi sự chấp nhận vai
                trò nạn nhân là một sự hèn nhát về mặt hữu thể học<C n="41" />.
              </p>

              <h3>7.3. Tương quan cấu trúc giữa Ngụy tín và Mưu chước Ánh sáng giả</h3>

              <p>
                Sự giao thoa rực rỡ nhất trong bài nghiên cứu này chính là sự tương đồng về mặt cấu
                trúc giữa khái niệm &ldquo;Ngụy tín&rdquo; của triết học hiện sinh và hiện tượng
                &ldquo;An ủi giả&rdquo; trong đời sống tâm linh<C n="39" />. Cả hai đều là những hình
                thái của sự tự lừa dối nhằm khước từ trách nhiệm phân định.
              </p>

              <p>
                <strong>Thứ nhất</strong>, việc thực thi phân định thần khí một cách nghiêm túc đòi hỏi
                một nỗ lực đối diện với tự do cá nhân vô cùng gian khổ<C n="17" />. Nó bắt con người phải
                liên tục chất vấn động cơ sâu kín của mình, điều này sinh ra sự lo âu. Khi ác thần
                (hoặc bản ngã) cung cấp một niềm &ldquo;an ủi giả&rdquo;, con người lập tức vồ lấy nó
                như một chiếc phao cứu sinh để chấm dứt sự dằn vặt của tiến trình lựa chọn. Bằng cách
                gán nhãn &ldquo;đây là thánh ý Chúa&rdquo; cho một khao khát mang tính ái kỷ cá nhân,
                họ triệt tiêu hoàn toàn trách nhiệm phải suy xét lương tâm<C n="18" />. Họ dùng lý tưởng
                tôn giáo cao cả để bao biện cho việc từ khước sự tự do<C n="40" />.
              </p>

              <p>
                <strong>Thứ hai</strong>, đặc tính nổi bật của ngụy tín là khả năng tự biện hộ bằng
                những lý lẽ vô cùng chặt chẽ. Kẻ ngụy tín có một &ldquo;niềm tin vào sự dối
                trá&rdquo; (<em>la foi de la mauvaise foi</em>) mãnh liệt đến mức họ thực sự tưởng rằng
                mình đang chân thật<C n="39" />. Điều này được thần học gia Guillén minh họa sinh động khi
                mô tả những người bám víu vào an ủi giả: họ có thể lớn tiếng khẳng định &ldquo;Tôi
                hoàn toàn bình an&rdquo;, trong khi toàn bộ ngôn ngữ cơ thể, nét mặt và hành vi của họ
                lại phát đi tín hiệu của sự xáo trộn, căng thẳng và mâu thuẫn tột độ<C n="45" />.
              </p>

              <p>
                <strong>Thứ ba</strong>, sự mù lòa mang tính lựa chọn. Dù con người thường rất sắc bén
                trong việc chỉ trích và nhận diện sự tự lừa dối của người khác, họ lại hoàn toàn mù lòa
                trước sự ngụy biện của chính mình<C n="45" />. Ác thần lợi dụng điểm mù này, kết hợp với
                xu hướng né tránh lo âu của con người, để dệt nên những lớp vỏ bọc ngụy tín hoàn hảo,
                biến &ldquo;cái tôi&rdquo; thành ngụy thần dưới danh xưng của sự thánh thiện<C n="18" />.
              </p>
            </section>

            <div className="section-divider"><span style={{ color: "var(--color-gold)", fontSize: "0.75rem" }}>✦</span></div>

            {/* ═══════════════════════════════════
                SECTION 8
                ═══════════════════════════════════ */}
            <section id="section-8">
              <h2>8. Chẩn đoán Lâm sàng và Kỹ năng Thực hành Phân định</h2>

              <p>
                Khi đã nhận diện được sự tinh vi của ánh sáng giả từ các bình diện thần học, tâm lý và
                triết học, nhiệm vụ quan trọng tiếp theo là thiết lập một mô hình can thiệp thực hành,
                giúp cá nhân phá vỡ cơ chế ngụy tín và đạt đến sự tự do nội tâm.
              </p>

              <h3>8.1. Quy tắc phân giải chuỗi tư tưởng: Khởi đầu — Ở giữa — Kết thúc</h3>

              <p>
                Đóng góp mang tính phương pháp luận vĩ đại nhất của Thánh Inhaxiô trong việc vạch trần
                mưu chước &ldquo;thiên thần sáng láng&rdquo; là quy tắc xét nghiệm toàn bộ lịch sử của
                một tư tưởng (Linh Thao số 333, 334)<C n="10" />. Khi phải đối mặt với một sự an ủi có
                nguyên nhân, thay vì vội vã chấp nhận, chủ thể phải đặt nó dưới một lăng kính phân giải
                quang phổ, quan sát toàn diện ba giai đoạn:
              </p>

              <ol>
                <li>
                  <strong>Khởi đầu:</strong> Tư tưởng hay cảm hứng đó có hướng về điều thiện hảo và phù
                  hợp với đức tin không?<C n="21" />
                </li>
                <li>
                  <strong>Ở giữa:</strong> Quá trình triển khai tư tưởng đó có duy trì sự bình an, tình
                  yêu thương và sự hiệp nhất không?<C n="21" />
                </li>
                <li>
                  <strong>Kết thúc:</strong> Đích đến cuối cùng của hành động là gì?<C n="21" />
                </li>
              </ol>

              <p>
                Nếu cả khởi đầu, ở giữa và kết thúc đều hoàn toàn tốt đẹp, trong sáng và quy hướng
                về sự thiện, thì đó là dấu chỉ chắc chắn của thần lành<C n="22" />. Tuy nhiên, nếu trong
                diễn tiến đó, tư tưởng bị lệch hướng sang một điều ít tốt lành hơn dự định ban đầu,
                hoặc nó làm linh hồn suy yếu, sinh ra sự bất an, xáo trộn, đánh mất sự tĩnh lặng vốn
                có, thì đó là bằng chứng không thể chối cãi cho thấy linh hồn đã sập bẫy của thiên thần
                giả dạng ánh sáng<C n="1" />.
              </p>

              <p>
                Khi phát hiện sự lừa dối này, quy trình không dừng lại ở việc gạt bỏ tư tưởng đó. Cá
                nhân phải thực hiện bước <strong>truy vết</strong>: quay lại điểm xuất phát, xem xét cẩn
                thận xem mưu chước của kẻ thù đã luồn lách vào tâm trí từ điểm ngã rẽ nào<C n="10" />.
                Việc phân tích pháp y tâm linh này giúp đương sự rút ra bài học kinh nghiệm sinh tử,
                củng cố hệ miễn dịch tâm hồn nhằm phòng tránh những chiến thuật tương tự trong tương
                lai<C n="10" />.
              </p>

              <h3>8.2. Mười chỉ nam phân định của Đức Thánh Cha Phanxicô</h3>

              <p>
                Trong loạt bài giáo lý về nghệ thuật đưa ra chọn lựa đúng đắn, Đức Thánh Cha Phanxicô
                đã đúc kết các nguyên tắc phân định thành những chỉ nam vô cùng thực tiễn<C n="15" />:
              </p>

              <ol>
                <li>
                  <strong>Cầu nguyện trong sự đơn sơ và thân thuộc:</strong> Sự phân định không thể diễn
                  ra trong môi trường thuần lý trí. Nó đòi hỏi một sự thân mật với Thiên Chúa, nói
                  chuyện với Ngài như một người bạn, từ đó lướt thắng được nỗi sợ hãi cho rằng thánh ý
                  Ngài sẽ tước đoạt tự do của con người<C n="17" />.
                </li>
                <li>
                  <strong>Thấu hiểu bản thân thông qua trí nhớ tình cảm:</strong> Rào cản lớn nhất của
                  phân định là sự thiếu hiểu biết về chính mình<C n="17" />. Để khắc phục, cần rèn luyện
                  khả năng quan sát &ldquo;cách chúng ta làm mọi việc&rdquo; và &ldquo;hành trình của
                  cảm xúc&rdquo;. Việc hồi tâm mỗi ngày, ghi nhận lại điều gì mang lại bình an đích
                  thực, điều gì gây ra nỗi buồn hay sự phản ứng gay gắt, là phương thức cốt lõi để
                  nhận diện ngụy tín<C n="17" />.
                </li>
                <li>
                  <strong>Lướt qua &ldquo;quyển sách đời mình&rdquo;:</strong> Phân định không chỉ là
                  nhìn vào một sự kiện đơn lẻ, mà phải đặt nó trong bối cảnh rộng lớn của cuộc đời.
                  Bằng cách đọc lại lịch sử cá nhân, con người nhận ra những mô thức hành vi lặp đi lặp
                  lại, những thông điệp rập khuôn đang chi phối họ, và khám phá ra những phép lạ nhỏ bé
                  ẩn giấu trong các biến cố<C n="33" />.
                </li>
                <li>
                  <strong>Lắng nghe khát khao sâu thẳm:</strong> Phân biệt rạch ròi giữa cảm xúc, ham
                  muốn nhất thời (thường liên quan đến an ủi giả) và khát khao sâu thẳm mang tính hiện
                  sinh. Khát khao thực sự là một chiếc la bàn định hướng, nó tồn tại vững bền qua thử
                  thách thời gian và luôn hướng con người đến sự viên mãn<C n="17" />.
                </li>
                <li>
                  <strong>Sự kiên nhẫn và Dừng lại:</strong> Trong lúc sầu khổ hoặc khi chưa có sự sáng
                  suốt, tuyệt đối không đưa ra các quyết định thay đổi cuộc đời. Phân định đòi hỏi khả
                  năng chịu đựng sự bất định và kiên nhẫn chờ đợi ân sủng thay vì phản ứng vội vã để
                  xoa dịu lo âu<C n="4" />.
                </li>
              </ol>

              <h3>8.3. Vai trò sống còn của Người đồng hành thiêng liêng (Linh hướng)</h3>

              <p>
                Như đã phân tích trong các phần trước, rào cản lớn nhất của tiến trình phân định chính
                là điểm mù của sự tự lừa dối<C n="45" />. Bản ngã con người luôn sở hữu một năng lực vô
                tận trong việc sản xuất ra các lý lẽ ngụy biện để bảo vệ vỏ bọc &ldquo;né tránh tâm
                linh&rdquo; của mình<C n="30" />. Chính vì lẽ đó, sự hướng dẫn của một người đồng hành
                thiêng liêng (linh hướng) trở thành yếu tố mang tính sống còn<C n="1" />.
              </p>

              <p>
                Linh hướng không phải là một phương pháp trị liệu tâm lý đơn thuần, mà là một nghệ
                thuật thánh thiêng<C n="48" />. Vị linh hướng đóng vai trò như một tấm gương phản chiếu
                khách quan, giúp chủ thể nhìn thấu sự giả tạo trong các lý lẽ tự biện hộ, phá vỡ cấu
                trúc &ldquo;ngụy tín&rdquo;, và phân tách rõ ràng giữa tiếng nói của Thiên Chúa và
                tiếng nói của bản ngã sa ngã<C n="33" />. Hơn nữa, phong cách giao tiếp cũng là một phép
                thử quan trọng: tiếng nói của Thiên Chúa thường nhẹ nhàng, dịu dàng, mang lại sự điềm
                tĩnh; trong khi tiếng nói của sự lừa dối thường ồn ào, khuếch đại, gây áp lực và làm
                mất đi sự bình an nội tại<C n="15" />.
              </p>

              <p>
                Trong môi trường mục vụ thực tế, chẳng hạn như đối với một linh mục xứ đạo, việc phân
                định lại càng trở nên phức tạp giữa muôn vàn áp lực từ công việc, sự kỳ vọng của giáo
                dân và những xung đột âm thầm<C n="49" />. Những thành công trong mục vụ bề ngoài, những
                lời khen ngợi dễ dàng trở thành những &ldquo;an ủi giả&rdquo;, ru ngủ vị mục tử trong
                sự tự mãn và bận rộn cơ học, dẫn đến việc xa rời nguồn mạch thần linh<C n="49" />. Việc
                nhận diện tâm hồn đang thực sự hướng về đâu – vươn tới Thiên Chúa hay đang đóng kín,
                cay đắng và tìm kiếm hư danh – đòi hỏi một sự cảnh giác và thói quen phân định liên
                lỉ<C n="7" />.
              </p>
            </section>

            <div className="section-divider"><span style={{ color: "var(--color-gold)", fontSize: "0.75rem" }}>✦</span></div>

            {/* ═══════════════════════════════════
                SECTION 9
                ═══════════════════════════════════ */}
            <section id="section-9">
              <h2>9. Tổng luận</h2>

              <p>
                Trong dòng chảy không ngừng của các suy tưởng, cảm xúc và hành vi, con người hiện đại
                không chỉ phải đối mặt với một thế giới tục hóa đầy rẫy những cám dỗ vật chất, mà còn
                phải đối diện với một mối nguy hiểm khốc liệt và vi tế hơn nhiều: cái ác được bọc trong
                ánh sáng huy hoàng của những lý tưởng siêu việt. Hiện tượng &ldquo;an ủi giả&rdquo;,
                mưu chước &ldquo;thiên thần sáng láng&rdquo;, xu hướng &ldquo;né tránh tâm linh&rdquo;
                (<em>Spiritual Bypassing</em>), hay trạng thái &ldquo;ngụy tín&rdquo; (<em>Mauvaise
                Foi</em>) của triết học hiện sinh, tựu trung lại, đều là những biểu hiện đa hình thái
                của cùng một căn bệnh nan y – sự lừa dối nội tâm nhằm khước từ gánh nặng của tự do,
                trách nhiệm và sự thật.
              </p>

              <p>
                Nghiên cứu đa chiều này đã minh chứng rằng, sự phân định tâm linh không bao giờ là một
                bài tập trí năng thuần túy nhằm chọn lựa giữa điều tốt và điều xấu trắng đen phân
                minh. Nó là một quá trình lọc lựa vô cùng tinh tế, một cuộc phẫu thuật nội tâm đau đớn
                nhưng cần thiết. Nó đòi hỏi một sự can đảm mang tính hiện sinh để con người dám đối
                diện với mọi mặt tối của bản ngã, dám gỡ bỏ lớp áo đạo đức giả tạo, và chấp nhận bước
                vào sự trống rỗng, khô khan khi cần thiết để phá vỡ các cấu trúc phòng vệ giả tạo.
              </p>

              <p>
                Ánh sáng đích thực của Thiên Chúa không hứa hẹn một liều thuốc tê giải thoát con người
                khỏi nỗi đau nhân sinh, cũng không cung cấp những cảm giác hưng phấn phù phiếm để xoa
                dịu lòng kiêu ngạo. Thay vào đó, nó mang lại một sự bình an sâu thẳm – một sức mạnh
                siêu nhiên cho phép con người tồn tại một cách chân thực (<em>authentic</em>), dám chịu
                trách nhiệm cho từng lựa chọn của mình và dấn thân yêu thương giữa lòng thế giới. Việc
                thấu hiểu cơ chế vận hành và làm chủ được nghệ thuật phân định chính là chiếc chìa khóa
                duy nhất để giải mã những &ldquo;an ủi giả&rdquo; của sự dữ, từ đó bước ra khỏi quỹ
                đạo của sự tự lừa dối để tiến vào vùng không gian rực rỡ của một đức tin trưởng thành
                và tự do đích thực.
              </p>
            </section>

            <ShareButtons />

            {/* ═══════════════════════════════════
                DISCLAIMER
                ═══════════════════════════════════ */}
            <div className="disclaimer-box mt-16">
              <strong>Khuyến cáo:</strong> Tài liệu này được biên soạn cho mục đích nghiên cứu và cung
              cấp thông tin học thuật. Đối với các vấn đề liên quan đến tư vấn tâm lý lâm sàng hoặc
              chẩn đoán các rối loạn tinh thần, vui lòng tham khảo ý kiến của các chuyên gia y tế hoặc
              bác sĩ tâm thần có chuyên môn.
            </div>

            {/* ═══════════════════════════════════
                REFERENCES / BIBLIOGRAPHY
                ═══════════════════════════════════ */}
            <section className="mt-16 pt-8" style={{ borderTop: "2px solid var(--color-parchment-deep)" }}>
              <h2
                className="text-lg font-semibold uppercase tracking-widest mb-6"
                style={{
                  fontFamily: "var(--font-ui)",
                  color: "var(--color-cardinal)",
                  borderBottom: "none",
                  paddingBottom: 0,
                }}
              >
                Nguồn trích dẫn
              </h2>
              <ol className="references-list">
                {references.map((ref, i) => (
                  <li key={i} id={`ref-${i + 1}`}>
                    <span className="ref-number">[{i + 1}]</span>
                    {ref.title}
                    {ref.url && (
                      <>
                        ,{" "}
                        <a href={ref.url} target="_blank" rel="noopener noreferrer">
                          {ref.url.length > 80 ? ref.url.slice(0, 77) + "…" : ref.url}
                        </a>
                      </>
                    )}
                  </li>
                ))}
              </ol>
            </section>

          </main>
        </div>
      </div>

      {/* ═══════════════════════════════════
          FOOTER
          ═══════════════════════════════════ */}
      <footer className="site-footer mt-16 py-12 px-6 text-center">
        <div className="hero-ornament mb-6" style={{ opacity: 0.3 }}>
          <span className="hero-cross">✟</span>
        </div>
        <p
          className="text-xs uppercase tracking-widest"
          style={{
            fontFamily: "var(--font-ui)",
            color: "var(--color-charcoal-muted)",
          }}
        >
          Ad Majorem Dei Gloriam
        </p>
        <p
          className="text-xs mt-2"
          style={{
            fontFamily: "var(--font-ui)",
            color: "var(--color-charcoal-muted)",
            opacity: 0.5,
          }}
        >
          Báo cáo Nghiên cứu Chuyên sâu • Phân Định Tâm Linh
        </p>
      </footer>
    </>
  );
}

/* ──────────────────────────────────────────
   REFERENCES DATA
   ────────────────────────────────────────── */
const references = [
  { title: "PHÂN ĐỊNH THIÊNG LIÊNG - Ignatian Spirituality", url: "https://spirituality.jcapsj.org/wp-content/uploads/2025/06/Phan-Dinh-Thieng.pdf" },
  { title: "ĐỨC GIÊ-SU KI-TÔ - ĐƯỜNG PHÂN ĐỊNH - HỘI ĐỒNG GIÁM MỤC VIỆT NAM", url: "https://hdgmvietnam.com/chi-tiet/duc-giesu-kito--duong-phan-dinh" },
  { title: "Đồng Hành Với Người Trẻ: Phân Định Để Khám Phá Hạnh Phúc | Giáo Phận Thanh Hóa", url: "https://giaophanthanhhoa.net/nam-muc-vu/dong-hanh-voi-nguoi-tre-phan-dinh-de-kham-pha-hanh-phuc-38619.html" },
  { title: "Cà Phê Phân Định #4 | \"Khi ánh sáng cũng có thể giả\"", url: "https://dongten.net/su-vu/van-phong-truyen-thong/ca-phe-phan-dinh-4-khi-anh-sang-cung-co-the-gia-nhung-an-ui-gia-cua-su-du" },
  { title: "\"Tết Con Kể Mẹ Nghe\" - Trở về với Tình Thương - Dòng Tên", url: "https://dongten.net/tet-con-ke-me-nghe-tro-ve-voi-tinh-thuong" },
  { title: "Buoc Duong Linh Thao", url: "https://www.linhthao.org/sach_linhthao/bdlt/2007/9a_PT5.htm" },
  { title: "Tuần Cửu Nhật Chúa Thánh Thần Hiện Xuống - Hội Dòng Đức Mẹ Hiệp Nhất", url: "https://hoidongducmehiepnhat.com/tuan-cuu-nhat-chua-thanh-than-hien-xuong/" },
  { title: "Phân định Thần khí theo thánh Ignatio - BÁO CHIA SE", url: "http://baochiaselts.blogspot.com/2018/10/phan-inh-than-khi-theo-thanh-ignatio.html" },
  { title: "Hồi Ký Thánh I-Nhã - INORUHANA", url: "https://inoruhana.com/nhung-buoc-duong-theo-chua-hoi-ky-thanh-i-nha/" },
  { title: "Chương Sáu: Phân Định Thần Loại - Phần II - Dòng Tên", url: "https://dongten.net/linh-dao/linh-dao-i-nha/chuong-sau-phan-dinh-than-loai-phan-ii" },
  { title: "TFM000231.pdf - Repositorio.comillas.edu", url: "https://repositorio.comillas.edu/xmlui/bitstream/handle/11531/6562/TFM000231.pdf?sequence=1" },
  { title: "The Spiritual Diary of Ignatius Loyola - The Ignatian Camino", url: "https://ignatiancamino.com/wp-content/uploads/2013/01/spiritual-diary-of-ignatius.pdf" },
  { title: "Lời ban Sự sống: Phân định thiêng liêng | Giáo Phận Hải Phòng", url: "https://gphaiphong.org/chi-tiet/loi-ban-su-song-phan-dinh-thieng-lieng_thu-sau-tuan-xxix-thuong-nien" },
  { title: "Chú giải các quy tắc nhận định thần loại của Thánh I-nhã", url: "https://linhthao.net/wp-content/uploads/2014/03/NDTL-Toner.pdf" },
  { title: "GIÁO LÝ VỀ PHÂN ĐỊNH: SỰ AN ỦI THIÊNG LIÊNG", url: "https://hdgmvietnam.com/chi-tiet/tiep-kien-chung-23-11-2022-giao-ly-phan-dinh-su-an-ui-thieng-lieng-48833" },
  { title: "Ignatian Conversation: Discernment at ADDU", url: "https://taborasj.wordpress.com/2015/07/20/ignition-conversation-discernment-at-addu/" },
  { title: "Loạt Bài Giáo Lý Về \"Phân Định\" - Giáo Phận Cần Thơ", url: "https://gpcantho.com/loat-bai-giao-ly-ve-phan-dinh/" },
  { title: "Phân Định Giữa Tiếng Nói Của Lương Tâm Và Tiếng Nói Của Bản Ngã", url: "https://mtgphanthiet.org/phan-dinh-giua-tieng-noi-cua-luong-tam-va-tieng-noi-cua-ban-nga/" },
  { title: "Discerning good and bad spirits - America Magazine", url: "https://www.americamagazine.org/faith/2017/01/11/discerning-good-and-bad-spirits-wisdom-jesuit-spiritual-writer/" },
  { title: "Spiritual Discernment - The Way - Jesuit Institute", url: "https://www.jesuitinstitute.org/the-way/spiritual-discernment" },
  { title: "Louis J. Puhl, SJ Translation - The Spiritual Exercises", url: "https://spiritualexercises.neocities.org/" },
  { title: "Linh-Thao.pdf", url: "https://linhthao.net/wp-content/uploads/2014/01/Linh-Thao.pdf" },
  { title: "Chương XI. Thập giá - Augustinô", url: "https://augustino.net/nhan-biet-tinh-yeu-doi-voi-thien-chua-chuong-11" },
  { title: "Chương XV. Ngoan ngoãn trước Chúa Thánh Thần - Augustinô", url: "https://augustino.net/nhan-biet-tinh-yeu-doi-voi-thien-chua-chuong-15" },
  { title: "GIỚI THIỆU - CoLungGiuaLua", url: "https://tieulun.hd.free.fr/download.php?file=CoLungGiuaLua_ThomasHGreen" },
  { title: "Discernment of Spirits Explained - Scribd", url: "https://www.scribd.com/document/866498838/How-to-Discern-the-Spirits" },
  { title: "INFORMATION TO USERS - collectionscanada.gc.ca", url: "https://www.collectionscanada.gc.ca/obj/s4/f2/dsk1/tape10/PQDD_0016/MQ52690.pdf" },
  { title: "Né tránh bằng tâm linh (Spiritual bypassing) - Exploring Psychology", url: "https://trangtamly.blog/2021/06/11/ne-tranh-bang-tam-linh-spiritual-bypassing/" },
  { title: "Spiritual bypassing - Viết để tự do", url: "https://vietdetudo.com/2021/10/08/spiritual-bypassing/" },
  { title: "10 Điều Bullshit Nhiều Người Theo Đuổi \"Tâm Linh\" Dễ Mắc Phải - YBOX", url: "https://ybox.vn/gia-vi/10-dieu-bullshit-nhieu-nguoi-theo-duoi-tam-linh-de-mac-phai-5bf137262eecb80878774655" },
  { title: "Hiện Tượng \"Chữa Lành\" Trong Giới Trẻ - YBOX", url: "https://ybox.vn/triet-hoc-tuoi-tre/hien-tuong-chua-lanh-trong-gioi-tre-tu-con-sot-tam-ly-den-trieu-chung-cua-thoi-dai-67dd89cb5389f6455284e4d2" },
  { title: "Vì sao tìm đến tâm linh lại cảm thấy trống rỗng? - Psychology & Me", url: "https://psyme.org/vi-sao-co-nhung-luc-toi-tim-den-tam-linh-de-cam-thay-thanh-than-nhung-roi-dau-do-trong-long-lai-van-cam-thay-trong-rong-kho-khan/" },
  { title: "Mười lời khuyên của Đức Phanxicô để có một lựa chọn đúng đắn", url: "https://www.giaophanlongxuyen.org/in-tin-tuc/20230220080109.html" },
  { title: "MƯỜI LỜI KHUYÊN CỦA ĐỨC PHANXICÔ ĐỂ ĐƯA RA CHỌN LỰA ĐÚNG ĐẮN", url: "http://xuanbichvietnam.net/trangchu/muoi-loi-khuyen-cua-duc-phanxico-de-dua-ra-chon-lua-dung-dan/" },
  { title: "Shadow Work | Just BE.", url: "https://innermostselves.wordpress.com/shadow-work/" },
  { title: "Phân định giữa tiếng nói của lương tâm và tiếng nói của bản ngã", url: "https://conducmevonhiem.org/bai-viet/21876-phan-dinh-giua-tieng-noi-cua-luong-tam-va-tieng-noi-cua-ban-nga" },
  { title: "Tâm lý học Tâm linh: Tại sao Thiền là không đủ? | Just BE.", url: "https://innermostselves.wordpress.com/2020/10/18/tam-ly-hoc-tam-linh-tai-sao-thien-la-khong-du/" },
  { title: "Tuổi Trẻ - Ta Bị Kết Án Phải Tự Do - YBOX", url: "https://ybox.vn/triet-hoc-tuoi-tre/tuoi-tre-ta-bi-ket-an-phai-tu-do-67d7d1314ee3c8372a8ccd6c" },
  { title: "Tưởng nhớ Giáo sư Nguyễn Văn Trung (1930 - 2022)", url: "https://www.vanthoconggiao.net/2022/10/giao-su-nguyen-van-trung-1930-2022-tac-gia-nguyen-vy-khanh.html" },
  { title: "Thanh Tâm Tuyền and the literature of freedom - VNUHCM Journal", url: "https://ssh.vnuhcmjournal.com.vn/index.php/ssh/article/view/890" },
  { title: "Hiện hữu và tự do: triết học Jean-Paul Sartre", url: "https://triethoc.edu.vn/vi/truong-phai-triet-hoc/chu-nghia-hien-sinh/hien-huu-va-tu-do-tu-huu-the-hoc-hien-sinh-den-dao-duc-hoc-hien-sinh-trong-triet-hoc-jean-paul-sartre_5046.html" },
  { title: "Jean-Paul Sartre - Vietsciences", url: "http://vietsciences.free.fr/biographie/artists/writers/sartre.htm" },
  { title: "\"Trên hết, đừng tự dối mình\" - Reddit r/Stoicism", url: "https://www.reddit.com/r/Stoicism/comments/fezarl/above_all_dont_lie_to_yourself_the_man_who_lies/?tl=vi" },
  { title: "Deceptions in Discernment - The Way", url: "https://www.theway.org.uk/Back/493Guill%C3%A9n.pdf" },
  { title: "Jean-Paul Sartre - Nỗi đam mê làm người của thế kỷ 20", url: "http://vanhoanghean.com.vn/chi-tiet-tin-tuc/11188-jean-paul-sartre-noi-dam-me-lam-nguoi-cua-the-ky-20-1" },
  { title: "Ignatian Reflection - Stritch School of Medicine", url: "https://www.stritch.luc.edu/lumen/meded/softchalkhdht/ignatianreflection/ignatianreflection_print.html" },
  { title: "Linh hướng: đồng hành thiêng liêng - Thanhlinh.net", url: "https://thanhlinh.net/vi/linh-huong-dong-hanh-thieng-lieng-va-giup-phan-dinh-y-chua" },
  { title: "Tâm hồn Linh mục coi xứ theo tinh thần thánh Inhaxiô Loyola | Giáo Phận Mỹ Tho", url: "https://giaophanmytho.net/chi-tiet/tam-hon-linh-muc-coi-xu-khi-dang-giua-nhung-%E2%80%98an-ui-sau-kho-an-ui-gia-va-an-ui-kho-khan%E2%80%99-theo-tinh-than-thanh-inhaxio-loyola" },
];
