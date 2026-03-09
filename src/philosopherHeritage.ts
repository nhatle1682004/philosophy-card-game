import type { Type } from './types';
import { PHILOSOPHERS } from './data';

export interface PhilosopherHeritageData {
  intellectual: Type.IntellectualHeritageItem[];
  physical: Type.PhysicalHeritageItem[];
}

/**
 * Di sản trí tuệ + vật chất theo từng triết gia.
 * Triết gia không có trong map sẽ hiển thị section với mảng rỗng hoặc fallback.
 */
export const PHILOSOPHER_HERITAGE: Record<string, PhilosopherHeritageData> = {
  socrates: {
    intellectual: [
      {
        id: 'socratic-method',
        title: 'Phương pháp Socrates (Socratic Method)',
        shortDescription: 'Kỹ thuật đặt câu hỏi để bộc lộ mâu thuẫn và dẫn tới định nghĩa rõ ràng.',
        year: 'k. 430–399 TCN',
        fullDescription: 'Socrates không để lại tác phẩm viết; phương pháp của ông được ghi lại qua các đối thoại của Plato. Ông liên tục đặt câu hỏi cho đối phương, làm bộc lộ sự thiếu nhất quán trong niềm tin, và hướng tới một định nghĩa có thể bảo vệ được. Ông tự nhận "không biết gì" và coi triết học là quá trình cùng nhau tìm kiếm chân lý.',
        historicalContext: 'Athens thế kỷ 5 TCN đang chuyển từ thần thoại sang lý tính. Các sophist dạy thuật hùng biện; Socrates chất vấn cả quyền lực chính trị lẫn tri thức thông thường, khiến ông bị coi là nguy hiểm.',
        impactOnPhilosophy: 'Nền tảng của triết học Tây phương: đối thoại, phê phán, và định nghĩa. Ảnh hưởng trực tiếp Plato, Aristotle, và toàn bộ truyền thống giáo dục và luận lý.',
      },
      {
        id: 'virtue-knowledge',
        title: 'Đức hạnh là tri thức',
        shortDescription: 'Không ai cố ý làm điều xấu; hành vi xấu xuất phát từ sự thiếu hiểu biết.',
        year: '',
        fullDescription: 'Socrates cho rằng nếu người ta thực sự biết điều tốt là gì, họ sẽ làm theo. Hành vi xấu là kết quả của sự nhầm lẫn hoặc vô minh. Do đó, việc "chăm sóc linh hồn" và trau dồi tri thức là con đường đến đức hạnh.',
        historicalContext: 'Quan điểm này đối lập với cách hiểu thông thường về "ý chí yếu" và đặt tri thức ở trung tâm đạo đức.',
        impactOnPhilosophy: 'Mở đường cho đạo đức học duy lý và thuyết trí tuệ đức hạnh; được Aristotle phát triển và tranh cãi cho đến ngày nay.',
      },
      {
        id: 'death-of-socrates-painting',
        title: 'The Death of Socrates (1787)',
        shortDescription: 'Bức tranh mô tả khoảnh khắc Socrates uống thuốc độc hemlock sau khi bị kết án.',
        year: '1787',
        fullDescription: 'Sau khi bị kết án tử hình, Socrates đã chấp nhận bản án bằng cách uống thuốc độc hemlock. Sự kiện này được tái hiện trong nhiều tác phẩm nghệ thuật, nổi bật nhất là bức tranh "The Death of Socrates" của họa sĩ Jacques-Louis David. Khoảnh khắc này không chỉ đánh dấu sự kết thúc cuộc đời của Socrates mà còn trở thành biểu tượng cho lòng dũng cảm, tự do tư tưởng và sự trung thành với triết lý sống của ông.',
        historicalContext: 'Năm 399 TCN, Socrates bị đưa ra xét xử tại Athens với cáo buộc làm hư hỏng thanh niên và không tôn trọng các vị thần của thành phố. Phiên tòa diễn ra trước hội đồng công dân Athens và trở thành một trong những sự kiện nổi tiếng nhất trong lịch sử triết học.',
        impactOnPhilosophy: 'Bức tranh của David tôn vinh Socrates như biểu tượng của sự kiên định với chân lý, ảnh hưởng sâu sắc đến văn hóa và mỹ học châu Âu thế kỷ XVIII–XIX.',
      },
    ],
    physical: [
      {
        id: 'agora-athens',
        placeName: 'Quảng trường Agora – nơi Socrates đối thoại với công dân Athens',
        country: 'Hy Lạp',
        shortDescription: 'Ancient Agora là trung tâm chính trị, thương mại và văn hóa của Athens cổ đại.',
        image: '/images/Socrates/quangtruong.jpg',
        history: 'Ancient Agora là trung tâm chính trị, thương mại và văn hóa của Athens cổ đại. Đây cũng là nơi Socrates thường xuyên xuất hiện để trò chuyện và tranh luận với các công dân, học giả và chính trị gia.',
        relationshipToPhilosopher: 'Tại quảng trường này, Socrates đã thực hiện nhiều cuộc đối thoại triết học nổi tiếng, đặt ra những câu hỏi về công lý, đạo đức và tri thức.',
        philosophicalSignificance: 'Agora không chỉ là một địa điểm lịch sử mà còn được xem là nơi khởi nguồn của nhiều tư tưởng triết học phương Tây. Ancient Agora – trung tâm đời sống công cộng của Athens cổ đại.',
      },
      {
        id: 'prison-athens',
        placeName: 'Nhà tù Socrates (Prison of Socrates)',
        country: 'Hy Lạp',
        shortDescription: 'Di tích hang đá trên đồi Philopappou, nơi Socrates bị giam và uống thuốc độc năm 399 TCN.',
        image: '/images/Socrates/nhatu.png',
        history: 'Di tích nằm trên đồi Philopappou (đồi Muses), gần Acropolis. Các căn phòng được đục vào đá, truyền thống cho rằng đây là nơi Socrates bị giam trước khi hành hình; ông từ chối trốn thoát và chọn cái chết theo luật.',
        relationshipToPhilosopher: 'Nơi Socrates dành những ngày cuối cùng đối thoại với bạn bè về linh hồn bất tử và đạo đức, rồi uống hemlock một cách bình thản.',
        philosophicalSignificance: 'Tượng trưng cho sự trung thành với triết học và lương tâm hơn là với sinh mạng; nguồn cảm hứng cho thuyết bất tuân dân sự và đạo đức cá nhân.',
      },
      {
        id: 'socrates-statue-academy',
        placeName: 'Tượng Socrates tại Học viện Athens',
        country: 'Hy Lạp',
        shortDescription: 'Tượng Socrates được đặt trước Học viện Athens, do Leonidas Drosis thực hiện thế kỷ XIX.',
        image: '/images/Socrates/tuong.jpg',
        history: 'Tượng Socrates được đặt trước Học viện Athens, một trong những trung tâm học thuật quan trọng nhất của Hy Lạp hiện đại. Bức tượng được điêu khắc bởi nghệ sĩ Leonidas Drosis vào thế kỷ XIX, nhằm tôn vinh một trong những triết gia vĩ đại nhất của nền văn minh Hy Lạp.',
        relationshipToPhilosopher: 'Bức tượng thể hiện Socrates trong tư thế suy tư, tượng trưng cho tinh thần tìm kiếm tri thức và đặt câu hỏi không ngừng về chân lý.',
        philosophicalSignificance: 'Địa điểm này ngày nay trở thành biểu tượng cho truyền thống triết học và giáo dục của Hy Lạp. Tượng Socrates tại Học viện Athens – biểu tượng của tri thức và triết học Hy Lạp.',
      },
      {
        id: 'death-of-socrates-art',
        placeName: 'Cái chết của Socrates – tranh Jacques-Louis David',
        country: 'Pháp (1787)',
        shortDescription: 'Bức tranh mô tả khoảnh khắc Socrates uống thuốc độc hemlock sau khi bị kết án.',
        image: '/images/Socrates/dead.jpg',
        history: 'Bức tranh "The Death of Socrates" do Jacques-Louis David hoàn thành năm 1787, mô tả khoảnh khắc Socrates uống thuốc độc hemlock sau khi bị kết án vì "làm hư hỏng thanh niên Athens". Tác phẩm trở thành biểu tượng của Khai sáng và lòng kiên định với chân lý.',
        relationshipToPhilosopher: 'David tái hiện Socrates trong tư thế bình thản, vừa nhận chén thuốc vừa giảng cho các môn đệ về linh hồn bất tử, thể hiện sự trung thành với triết lý đến hơi thở cuối cùng.',
        philosophicalSignificance: 'Khoảnh khắc này không chỉ đánh dấu sự kết thúc cuộc đời của Socrates mà còn trở thành biểu tượng cho lòng dũng cảm, tự do tư tưởng và sự trung thành với triết lý sống của ông. Khoảnh khắc Socrates uống thuốc độc trong bức tranh của Jacques-Louis David.',
      },
    ],
  },
  plato: {
    intellectual: [
      {
        id: 'theory-of-forms',
        title: 'Thuyết Ý niệm (Theory of Forms)',
        shortDescription:
          'Thế giới giác quan chỉ là bản sao không hoàn hảo của một thực tại cao hơn – thế giới Ý niệm.',
        year: 'k. 427–347 TCN',
        fullDescription:
          'Plato cho rằng thế giới mà con người cảm nhận bằng giác quan chỉ là bản sao không hoàn hảo của một thực tại cao hơn – thế giới của các Ý niệm (Forms). Ở đó tồn tại những bản thể hoàn hảo như cái thiện, cái đẹp hay công lý. Tri thức chân chính không đến từ kinh nghiệm cảm giác mà từ khả năng suy tư và nhận thức bằng lý trí.',
        historicalContext:
          'Sau cái chết của Socrates và sự bất ổn chính trị tại Athens, Plato tìm kiếm một nền tảng vững chắc cho chân lý và đạo đức. Ông cho rằng chân lý không thể phụ thuộc vào ý kiến của số đông mà phải dựa trên những nguyên lý vĩnh cửu và bất biến.',
        impactOnPhilosophy:
          'Thuyết Ý niệm trở thành một trong những nền tảng của triết học phương Tây, ảnh hưởng sâu sắc tới triết học trung cổ, thần học Kitô giáo và nhiều trường phái triết học duy tâm, hiện sinh và hiện đại sau này.',
      },
      {
        id: 'republic-ideal-state',
        title: 'Nhà nước lý tưởng (The Republic)',
        shortDescription:
          'Mô hình nhà nước lý tưởng được cai trị bởi các triết gia, đặt công lý và tri thức ở trung tâm.',
        year: 'The Republic',
        fullDescription:
          'Trong tác phẩm Republic, Plato xây dựng hình ảnh một nhà nước lý tưởng được tổ chức dựa trên công lý và tri thức. Ông chia xã hội thành ba tầng lớp: người cai trị (triết gia), chiến binh và người sản xuất. Những người có tri thức triết học phải là người lãnh đạo vì họ hiểu được bản chất của cái thiện.',
        historicalContext:
          'Plato sống trong thời kỳ Athens trải qua nhiều biến động chính trị sau chiến tranh Peloponnesus. Sự thất vọng với nền dân chủ đương thời khiến ông đề xuất mô hình “triết gia trị vì” như một giải pháp cho một xã hội công bằng và ổn định.',
        impactOnPhilosophy:
          'Republic trở thành một trong những công trình triết học chính trị quan trọng nhất lịch sử, ảnh hưởng sâu rộng đến tư tưởng chính trị, lý luận nhà nước và các tranh luận về công lý suốt hơn hai nghìn năm.',
      },
    ],
    physical: [
      {
        id: 'academy-athens-site',
        placeName: 'Học viện Plato (Academy of Plato), Athens',
        country: 'Hy Lạp',
        shortDescription:
          'Khu di tích nơi Plato thành lập học viện của mình vào khoảng năm 387 TCN.',
        image: '/images/plato/vienhanglam.png',
        history:
          'Khu di tích Học viện Plato nằm tại Athens, nơi triết gia thành lập trường học của mình vào khoảng năm 387 TCN. Tại đây, các học giả nghiên cứu triết học, toán học, thiên văn và khoa học tự nhiên trong suốt nhiều thế kỷ.',
        relationshipToPhilosopher:
          'Đây là nơi Plato giảng dạy và đào tạo nhiều nhà tư tưởng lớn, nổi bật nhất là Aristotle. Những cuộc thảo luận triết học tại Học viện đã góp phần định hình nền tảng của triết học phương Tây.',
        philosophicalSignificance:
          'Học viện được xem là tiền thân của các trường đại học hiện đại, biểu tượng cho truyền thống nghiên cứu và giáo dục tri thức trong văn minh phương Tây.',
      },
      {
        id: 'plato-manuscripts',
        placeName: 'Bản thảo cổ các đối thoại của Plato',
        country: 'Châu Âu',
        shortDescription:
          'Các bản thảo và bản sao trung cổ lưu giữ những đối thoại triết học của Plato.',
        image: '/images/plato/banthaoco.png',
        history:
          'Các tác phẩm của Plato được viết dưới dạng đối thoại triết học, trong đó nhân vật trung tâm thường là Socrates. Qua nhiều thế kỷ sao chép và lưu truyền, các bản thảo cổ đã bảo tồn nội dung của các đối thoại như Republic, Symposium hay Phaedo.',
        relationshipToPhilosopher:
          'Những bản thảo này là phương tiện đưa tư tưởng của Plato vượt qua thời gian và biên giới, giúp hậu thế tiếp tục tiếp xúc trực tiếp với giọng nói triết học của ông.',
        philosophicalSignificance:
          'Các bản thảo cổ trở thành nền tảng cho nghiên cứu triết học, thần học và khoa học châu Âu, cho phép diễn giải lại và đối thoại với Plato trong suốt hơn hai nghìn năm.',
      },
      {
        id: 'school-of-athens',
        placeName: 'Tranh “The School of Athens” – Raphael',
        country: 'Vatican (1511)',
        shortDescription:
          'Bức tranh Phục Hưng mô tả các triết gia Hy Lạp, trong đó Plato chỉ tay lên trời.',
        image: '/images/plato/tranh.jpg',
        history:
          'Bức tranh The School of Athens của Raphael (1511) mô tả một không gian tưởng tượng nơi các triết gia Hy Lạp cổ đại cùng hội tụ. Plato được vẽ ở trung tâm, bước đi bên cạnh Aristotle và chỉ tay lên bầu trời.',
        relationshipToPhilosopher:
          'Hình tượng Plato chỉ tay lên bầu trời tượng trưng cho thế giới Ý niệm – khái niệm trung tâm trong triết học của ông.',
        philosophicalSignificance:
          'Tác phẩm trở thành biểu tượng của tư tưởng triết học thời Phục Hưng và thể hiện sự tôn vinh tri thức cổ đại trong văn minh phương Tây, đặc biệt là di sản của Plato.',
      },
    ],
  },
  aristotle: {
    intellectual: [
      {
        id: 'aristotelian-logic',
        title: 'Logic học Aristotle (Aristotelian Logic)',
        shortDescription:
          'Aristotle là người đặt nền móng cho logic học hình thức trong triết học phương Tây.',
        year: '384–322 TCN',
        fullDescription:
          'Aristotle là người đặt nền móng cho logic học hình thức trong triết học phương Tây. Ông phát triển hệ thống suy luận gọi là tam đoạn luận (syllogism), cho phép con người rút ra kết luận hợp lý từ các tiền đề đã biết. Hệ thống này trở thành công cụ quan trọng để phân tích lập luận và tìm kiếm chân lý trong triết học và khoa học.',
        historicalContext:
          'Trong thời kỳ Hy Lạp cổ đại, triết học đang chuyển từ các suy đoán siêu hình sang những phương pháp nghiên cứu có hệ thống. Aristotle đã hệ thống hóa các phương pháp suy luận và biến logic thành một ngành khoa học riêng biệt.',
        impactOnPhilosophy:
          'Logic của Aristotle trở thành nền tảng của tư duy khoa học và triết học phương Tây trong hơn hai nghìn năm. Hệ thống này được giảng dạy rộng rãi trong các trường học trung cổ và ảnh hưởng mạnh mẽ đến triết học, toán học và khoa học.',
      },
      {
        id: 'teleology',
        title: 'Thuyết mục đích (Teleology)',
        shortDescription:
          'Mọi sự vật trong tự nhiên đều có mục đích (telos) riêng; bốn nguyên nhân giải thích sự phát triển.',
        year: '',
        fullDescription:
          'Aristotle cho rằng mọi sự vật trong tự nhiên đều có mục đích (telos) riêng. Theo ông, để hiểu một sự vật, cần xem xét bốn nguyên nhân: nguyên nhân vật chất, nguyên nhân hình thức, nguyên nhân tác động và nguyên nhân mục đích. Lý thuyết này giúp giải thích sự phát triển của các sự vật trong tự nhiên và xã hội.',
        historicalContext:
          'Trong bối cảnh triết học Hy Lạp đang tìm cách giải thích bản chất của thế giới, Aristotle phát triển một hệ thống triết học kết hợp giữa quan sát thực nghiệm và phân tích lý luận.',
        impactOnPhilosophy:
          'Quan điểm này ảnh hưởng sâu sắc đến triết học trung cổ, đặc biệt là triết học kinh viện và thần học Kitô giáo. Nó cũng đặt nền tảng cho các nghiên cứu khoa học về sinh học và tự nhiên học.',
      },
      {
        id: 'nicomachean-ethics',
        title: 'Đạo đức học – Con đường trung dung (Nicomachean Ethics)',
        shortDescription:
          'Hạnh phúc cao nhất là eudaimonia; đạt được qua đức hạnh và con đường trung dung.',
        year: 'Nicomachean Ethics',
        fullDescription:
          'Aristotle cho rằng hạnh phúc cao nhất của con người là eudaimonia, thường được hiểu là sự thịnh vượng hoặc đời sống tốt đẹp. Để đạt được điều này, con người phải thực hành các đức hạnh thông qua con đường trung dung, tránh cả sự thiếu hụt và sự thái quá.',
        historicalContext:
          'Trong xã hội Hy Lạp cổ đại, các triết gia quan tâm sâu sắc đến vấn đề đạo đức và cách con người nên sống. Aristotle tiếp nối truyền thống của Socrates và Plato nhưng nhấn mạnh vai trò của kinh nghiệm và thói quen trong việc hình thành đức hạnh.',
        impactOnPhilosophy:
          'Tư tưởng đạo đức của Aristotle trở thành một trong những nền tảng của đạo đức học phương Tây, ảnh hưởng đến triết học, chính trị học và giáo dục trong nhiều thế kỷ.',
      },
    ],
    physical: [
      {
        id: 'lyceum',
        placeName: 'Lyceum – Trường học của Aristotle, Athens',
        country: 'Hy Lạp',
        shortDescription:
          'Lyceum là trường học do Aristotle thành lập tại Athens vào khoảng năm 335 TCN.',
        image: '/images/Aristotle/truonghoc.jpeg',
        history:
          'Lyceum là trường học do Aristotle thành lập tại Athens vào khoảng năm 335 TCN. Đây là một trung tâm nghiên cứu triết học và khoa học nổi tiếng trong thế giới Hy Lạp cổ đại.',
        relationshipToPhilosopher:
          'Tại Lyceum, Aristotle cùng các học trò nghiên cứu nhiều lĩnh vực như logic, sinh học, chính trị học và thiên văn học. Ông thường giảng dạy trong khi đi dạo cùng học trò, vì vậy trường phái của ông được gọi là Peripatetic (trường phái tản bộ).',
        philosophicalSignificance:
          'Lyceum trở thành một trong những trung tâm tri thức quan trọng của thế giới cổ đại và đặt nền móng cho truyền thống nghiên cứu khoa học có hệ thống.',
      },
      {
        id: 'aristotle-manuscripts',
        placeName: 'Bản thảo cổ các tác phẩm của Aristotle',
        country: 'Châu Âu',
        shortDescription:
          'Các tác phẩm của Aristotle bao gồm nhiều lĩnh vực: logic, sinh học, chính trị học và siêu hình học.',
        image: '/images/Aristotle/palamedes.jpg',
        history:
          'Các tác phẩm của Aristotle bao gồm nhiều lĩnh vực khác nhau như logic, sinh học, chính trị học và siêu hình học.',
        relationshipToPhilosopher:
          'Những tác phẩm như Metaphysics, Politics và Nicomachean Ethics đã trở thành những văn bản kinh điển của triết học phương Tây.',
        philosophicalSignificance:
          'Các bản thảo cổ giúp bảo tồn hệ thống triết học toàn diện của Aristotle và ảnh hưởng sâu sắc đến tư tưởng triết học, khoa học và giáo dục của châu Âu trong suốt thời trung cổ và thời kỳ Phục Hưng.',
      },
    ],
  },
  heraclitus: {
    intellectual: [
      {
        id: 'panta-rhei',
        title: 'Panta rhei – Vạn vật đều trôi chảy',
        shortDescription:
          'Mọi thứ đều biến đổi không ngừng; không ai tắm hai lần trên cùng một dòng sông.',
        year: 'k. 535–475 TCN',
        fullDescription:
          'Heraclitus cho rằng thực tại không đứng yên mà luôn trong trạng thái biến chuyển. Câu nói nổi tiếng "Không ai tắm hai lần trên cùng một dòng sông" thể hiện tư tưởng này: dòng sông và con người đều thay đổi từng khoảnh khắc. Sự biến đổi vĩnh cửu là bản chất của vũ trụ.',
        historicalContext:
          'Heraclitus sống tại Ephesus, Tiểu Á, trong giai đoạn triết học Hy Lạp chuyển từ thần thoại sang tư duy về bản nguyên (arche) và trật tự vũ trụ. Ông phản đối quan điểm tĩnh tại và nhấn mạnh sự vận động.',
        impactOnPhilosophy:
          'Tư tưởng "vạn vật trôi chảy" ảnh hưởng sâu sắc đến triết học sau này, từ Plato (đối lập với thế giới Ý niệm bất biến) đến Hegel, Nietzsche và triết học quá trình. Trở thành biểu tượng của triết học về sự thay đổi.',
      },
      {
        id: 'logos-fire',
        title: 'Logos và Lửa – Trật tự ẩn và bản nguyên',
        shortDescription:
          'Logos là quy luật vũ trụ; lửa là yếu tố nền tảng; xung đột là cha đẻ của vạn vật.',
        year: '',
        fullDescription:
          'Heraclitus tin rằng dù vạn vật biến đổi, vẫn có một trật tự ẩn (Logos) chi phối mọi thứ. Ông coi lửa là bản nguyên (arche) của vũ trụ vì lửa vừa biến đổi vừa biến đổi mọi thứ. Ông cũng nhấn mạnh sự thống nhất của các mặt đối lập: xung đột và căng thẳng tạo nên sự hài hòa và sinh ra vạn vật.',
        historicalContext:
          'Trong bối cảnh các triết gia Tiền Socrates tranh luận về bản nguyên của thế giới (nước, không khí, số…), Heraclitus đề xuất Logos và lửa như nền tảng vừa động vừa có trật tự.',
        impactOnPhilosophy:
          'Khái niệm Logos ảnh hưởng đến triết học Hy Lạp, thần học Kitô giáo (Logos trong Tin Mừng Gioan) và tư duy về quy luật tự nhiên. Thuyết đối lập thống nhất được Hegel và nhiều triết gia sau này phát triển.',
      },
    ],
    physical: [
      {
        id: 'heraclitus-statue',
        placeName: 'Tượng Heraclitus',
        country: 'Hy Lạp / Thổ Nhĩ Kỳ',
        shortDescription:
          'Tượng hoặc tác phẩm điêu khắc tôn vinh Heraclitus – triết gia của sự biến đổi.',
        image: '/images/Heraclitus/tuong.png',
        history:
          'Heraclitus sinh ra và sống tại Ephesus (nay thuộc Thổ Nhĩ Kỳ), một thành phố Hy Lạp cổ đại. Các bức tượng và hình tượng về ông được tạo dựng để tưởng nhớ một trong những triết gia Tiền Socrates có ảnh hưởng nhất.',
        relationshipToPhilosopher:
          'Heraclitus được mô tả trong truyền thống như một con người cô độc và khó gần, sống gắn bó với Ephesus. Hình tượng điêu khắc thường thể hiện ông trong tư thế suy tư, gắn với triết lý về sự thay đổi và Logos.',
        philosophicalSignificance:
          'Tượng và di tích liên quan đến Heraclitus là biểu tượng của di sản triết học Ephesus và triết học về sự vận động, đối lập với quan niệm thế giới tĩnh tại.',
      },
      {
        id: 'ephesus-heritage',
        placeName: 'Ephesus – Di tích và đền thờ cổ',
        country: 'Thổ Nhĩ Kỳ (Hy Lạp cổ đại)',
        shortDescription:
          'Ephesus là quê hương của Heraclitus; di tích đền thờ và thành phố cổ còn lưu dấu.',
        image: '/images/Heraclitus/den.jpg',
        history:
          'Ephesus là một trong những thành phố quan trọng nhất của thế giới Hy Lạp cổ đại, nổi tiếng với Đền Artemis (một trong Bảy kỳ quan). Đây là nơi Heraclitus sinh sống và có thể đã viết tác phẩm của mình.',
        relationshipToPhilosopher:
          'Heraclitus là công dân Ephesus; truyền thống kể rằng ông từ chối tham gia chính trị và sống ẩn dật. Khung cảnh đền đài và văn hóa Ephesus gắn liền với bối cảnh hình thành tư tưởng của ông.',
        philosophicalSignificance:
          'Ephesus là không gian vật chất gắn với triết gia của "vạn vật trôi chảy", nơi kết nối di sản triết học Tiền Socrates với đời sống thành bang và tôn giáo cổ đại.',
      },
    ],
  },
  parmenides: {
    intellectual: [
      {
        id: 'being-and-nonbeing',
        title: 'Cái là và cái không là',
        shortDescription:
          'Parmenides cho rằng chỉ có \"cái là\" tồn tại; mọi thay đổi và \"cái không là\" đều bất khả.',
        year: 'k. 515–450 TCN',
        fullDescription:
          'Trong bài thơ triết học nổi tiếng của mình, Parmenides phân biệt giữa con đường của Chân lý và con đường của Ý kiến. Ông lập luận rằng \"cái là\" phải bất sinh, bất diệt, không phân chia và bất biến; còn \"cái không là\" thì không thể được nghĩ tới hay được nói tới. Do đó, mọi sự thay đổi, sinh thành hay hủy diệt mà giác quan cho ta thấy chỉ là ảo giác.',
        historicalContext:
          'Parmenides thuộc trường phái Elea trong giai đoạn Tiền Socrates, khi các triết gia Hy Lạp đang tranh luận về bản nguyên và cấu trúc của thực tại. Ông phản ứng lại các quan điểm đề cao biến đổi như của Heraclitus, nhấn mạnh tính duy nhất và bất biến của Thực tại.',
        impactOnPhilosophy:
          'Lập luận nghiêm ngặt của Parmenides về \"cái là\" đặt nền móng cho siêu hình học và tư duy logic. Ông buộc triết học phải phân biệt giữa vẻ bề ngoài cảm tính và cấu trúc lý tính của thực tại, ảnh hưởng sâu sắc đến Plato, Aristotle và toàn bộ truyền thống siêu hình học sau này.',
      },
      {
        id: 'way-of-truth',
        title: 'Con đường Chân lý – Bài thơ triết học',
        shortDescription:
          'Tác phẩm \"Về Tự nhiên\" trình bày bằng thơ hai con đường: Chân lý (alētheia) và Ý kiến (doxa).',
        year: '',
        fullDescription:
          'Tác phẩm của Parmenides, thường được gọi là \"Về Tự nhiên\", được viết dưới dạng thơ. Trong đó, một nữ thần chỉ cho ông hai con đường tư duy: con đường Chân lý, nơi ta chỉ suy nghĩ về cái là; và con đường Ý kiến, nơi con người lạc trong thế giới cảm giác và mâu thuẫn. Bài thơ kết hợp phong cách huyền thoại với lập luận triết học chặt chẽ.',
        historicalContext:
          'Việc dùng thơ để trình bày lập luận triết học phản ánh giai đoạn chuyển tiếp từ thi ca sử thi sang triết học lý tính trong văn hóa Hy Lạp, nơi truyền thống Homer vẫn còn rất mạnh.',
        impactOnPhilosophy:
          'Bài thơ của Parmenides trở thành một mẫu mực sớm cho việc sử dụng lý luận nghiêm ngặt trong triết học, đồng thời truyền cảm hứng cho nhiều triết gia sau này về hình thức trình bày giàu tính biểu tượng của tư tưởng.',
      },
    ],
    physical: [
      {
        id: 'parmenides-statue',
        placeName: 'Tượng Parmenides',
        country: 'Ý / Hy Lạp cổ đại',
        shortDescription:
          'Tượng Parmenides gợi lại hình ảnh triết gia Elea – người khẳng định tính duy nhất và bất biến của Thực tại.',
        image: '/images/Parmenides/tuong.jpg',
        history:
          'Parmenides gắn liền với thành bang Elea (nay là Velia, miền nam Ý), một trung tâm triết học ở khu vực Magna Graecia. Các tượng và hình khắc hiện đại tái hiện chân dung ông như một hiền triết trầm tư, nối kết với truyền thống Elea.',
        relationshipToPhilosopher:
          'Hình tượng Parmenides trong điêu khắc và minh họa nhấn mạnh sự nghiêm nghị và triệt để trong tư duy của ông – người dám phủ nhận trực giác thông thường về thay đổi để bảo vệ lập trường lý tính về \"cái là\".',
        philosophicalSignificance:
          'Tượng Parmenides tượng trưng cho một bước ngoặt trong lịch sử tư tưởng: từ quan sát cảm tính sang suy tư siêu hình học về tồn tại, mở ra dòng chảy siêu hình học kéo dài qua Plato, Aristotle đến triết học hiện đại.',
      },
    ],
  },
  confucius: {
    intellectual: [
      {
        id: 'analects',
        title: 'Luận ngữ (Analects)',
        shortDescription: 'Tuyển tập lời nói và hành vi của Khổng Tử do môn đệ ghi lại.',
        year: 'k. 479 TCN trở đi',
        fullDescription: 'Luận ngữ là nguồn chính về tư tưởng Khổng Tử: Nhân (nhân ái), Lễ (nghi lễ, quy phạm), Trung dung, và đạo quân tử. Nhấn mạnh tu thân, giáo dục và quan hệ xã hội có đạo đức.',
        historicalContext: 'Thời Xuân Thu, Trung Quốc bị chia cắt; Khổng Tử đi nhiều nước truyền bá đạo của mình và dạy học. Môn đệ ghi chép và biên soạn sau khi ông mất.',
        impactOnPhilosophy: 'Trụ cột Nho giáo; định hình văn hóa, giáo dục và chính trị Đông Á hơn hai nghìn năm.',
      },
    ],
    physical: [
      {
        id: 'temple-qufu',
        placeName: 'Khổng Miếu, Khúc Phụ (Temple of Confucius, Qufu)',
        country: 'Trung Quốc',
        shortDescription: 'Đền thờ Khổng Tử và khu di tích liên quan tại quê hương ông.',
        image: '/images/khongtu/Screenshot 2026-03-09 212821.png',
        history: 'Khu đền thờ và lăng mộ Khổng Tử tại Khúc Phụ, Sơn Đông, được xây dựng và mở rộng qua nhiều triều đại. Di sản thế giới UNESCO.',
        relationshipToPhilosopher: 'Nơi sinh và an nghỉ của Khổng Tử; trung tâm tưởng niệm và nghi lễ Nho giáo qua các thời.',
        philosophicalSignificance: 'Biểu tượng của sự tôn kính tri thức và đạo đức trong văn hóa Trung Hoa.',
      },
    ],
  },
  kant: {
    intellectual: [
      {
        id: 'critique-pure-reason',
        title: 'Phê phán lý tính thuần túy (Critique of Pure Reason)',
        shortDescription: 'Phân tích giới hạn và khả năng của tri thức con người.',
        year: '1781',
        fullDescription: 'Kant đặt câu hỏi "Tôi có thể biết gì?" và cho rằng con người cấu trúc kinh nghiệm qua các phạm trù (không gian, thời gian, nhân quả...). Siêu nghiệm (transcendental) không vượt ra ngoài kinh nghiệm; siêu hình học truyền thống về Thượng đế hay linh hồn không thể chứng minh bằng lý tính thuần túy.',
        historicalContext: 'Sau Hume đánh thức Kant khỏi "giấc ngủ giáo điều"; Khai sáng Đức và nhu cầu dung hòa duy lý và kinh nghiệm.',
        impactOnPhilosophy: 'Bước ngoặt "Copernican" trong triết học; ảnh hưởng Hegel, Schopenhauer, hiện tượng học và triết học phân tích.',
      },
    ],
    physical: [
      {
        id: 'konigsberg',
        placeName: 'Königsberg (Kaliningrad)',
        country: 'Nga (trước: Phổ)',
        shortDescription: 'Thành phố nơi Kant sinh sống và giảng dạy suốt đời.',
        image: 'https://images.unsplash.com/photo-1513326738677-b964603b1d44?w=1200&q=85',
        history: 'Kant gần như không rời Königsberg. Ông giảng tại Đại học Königsberg và sống theo lịch trình đều đặn đến mức dân thành phố được nói là chỉnh đồng hồ theo bước đi của ông.',
        relationshipToPhilosopher: 'Toàn bộ cuộc đời và sự nghiệp triết học của Kant gắn với thành phố này.',
        philosophicalSignificance: 'Biểu tượng của đời sống triết học kỷ luật và "thế giới trong đầu" — tư tưởng vượt không gian.',
      },
    ],
  },
  nietzsche: {
    intellectual: [
      {
        id: 'zarathustra',
        title: 'Also sprach Zarathustra (Zarathustra đã nói như thế)',
        shortDescription: 'Tác phẩm triết học-văn chương về Siêu nhân và ý chí quyền lực.',
        year: '1883–1885',
        fullDescription: 'Nietzsche dùng nhân vật Zarathustra để trình bày ý tưởng về cái chết của Thượng đế, Siêu nhân (Übermensch), vĩnh cửu trở lại, và ý chí quyền lực. Văn phong thi phúng và tiên tri.',
        historicalContext: 'Nietzsche đã từ chức giáo sư, sống cô lập vì sức khỏe. Ông phá bỏ đạo đức Kitô giáo và chủ nghĩa bi quan Schopenhauer.',
        impactOnPhilosophy: 'Ảnh hưởng sâu sắc lên hiện sinh, hậu hiện đại, văn học và tâm lý học.',
      },
    ],
    physical: [
      {
        id: 'weimar-archive',
        placeName: 'Goethe- und Schiller-Archiv, Weimar',
        country: 'Đức',
        shortDescription: 'Lưu trữ bản thảo và di sản Nietzsche (và các tác giả khác).',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=85',
        history: 'Weimar là trung tâm văn hóa Đức; kho lưu trữ này bảo quản nhiều bản thảo quý, trong đó có tư liệu về Nietzsche.',
        relationshipToPhilosopher: 'Nietzsche sống những năm cuối tại Weimar (qua đời 1900); di sản tư tưởng được lưu giữ và nghiên cứu tại đây.',
        philosophicalSignificance: 'Nơi bảo tồn di sản vật chất của tư tưởng — bản thảo và bối cảnh lịch sử.',
      },
    ],
  },
};

/** Lấy di sản cho một triết gia.
 * Nếu chưa có data chi tiết trong map, tự sinh 1 mục di sản trí tuệ
 * dựa trên thông tin thẻ (tên, thời đại, khái niệm cốt lõi).
 */
export function getHeritageForPhilosopher(philosopherId: string): PhilosopherHeritageData {
  const data = PHILOSOPHER_HERITAGE[philosopherId];
  if (data) return data;

  const philosopher = PHILOSOPHERS.find((p) => p.id === philosopherId);
  if (!philosopher) {
    return { intellectual: [], physical: [] };
  }

  const fallbackIntellectual: Type.IntellectualHeritageItem = {
    id: `${philosopher.id}-core-idea`,
    title: `Di sản trí tuệ: ${philosopher.concept}`,
    shortDescription: philosopher.description,
    year: philosopher.years,
    fullDescription:
      `${philosopher.name} được ghi nhớ trước hết qua đóng góp cho ${philosopher.school.toLowerCase()} trong bối cảnh ${philosopher.period.toLowerCase()}. ` +
      `Từ góc nhìn này, khái niệm cốt lõi “${philosopher.concept}” trở thành điểm hội tụ cho nhiều suy tư của ông/bà về con người và thế giới. ` +
      `Các văn bản, bài giảng và truyền thống tiếp nhận sau này đã biến ý tưởng này thành một phần của kho tàng triết học nhân loại.`,
    historicalContext:
      `Triết gia hoạt động trong giai đoạn ${philosopher.period} (${philosopher.years}), khi những tranh luận về tri thức, đạo đức và trật tự xã hội đang định hình. ` +
      `Bối cảnh đó tạo điều kiện để ${philosopher.name} phát triển lối tư duy riêng và phác họa nên quan niệm về “${philosopher.concept}”.`,
    impactOnPhilosophy:
      `Di sản trí tuệ của ${philosopher.name} tiếp tục ảnh hưởng đến các cuộc tranh luận triết học xoay quanh chủ đề ${philosopher.concept.toLowerCase()} ` +
      `và truyền cảm hứng cho nhiều thế hệ độc giả, học giả và những người yêu triết học.`,
  };

  // Chỉ tạo fallback cho di sản phi vật thể.
  // Di sản vật thể chỉ hiển thị khi có dữ liệu cụ thể kèm ảnh thật trong PHILOSOPHER_HERITAGE.
  return { intellectual: [fallbackIntellectual], physical: [] };
}
