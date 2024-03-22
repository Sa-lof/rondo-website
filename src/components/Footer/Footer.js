import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import './Footer.css'; // Make sure your CSS is adjusted for Material-UI if necessary
import logoImage from '../../assets/logos/LOGO_W.PNG';
import { Box, Typography, Link, Modal, Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <footer className="footer-container">
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <img
              src={logoImage}
              alt="Logo"
              className="footer-logo"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Link href="https://www.instagram.com/rondo.productions/" target="_blank">
                <InstagramIcon sx={{ color: "white", fontSize: "2rem", marginX: 1 }} />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=100084389084321" target="_blank">
                <FacebookIcon sx={{ color: "white", fontSize: "2rem", marginX: 1, marginRight: "20px"}} />
              </Link>
              <Link href="https://m.imdb.com/name/nm15819071/?language=es-mx" target="_blank">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3enwwitVdsTzKe1O73kGule5HsYnRmAM2Lg&usqp=CAU" alt="IMDb Icon" style={{ width: '1.5rem', marginX: 1}} />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Ojalá nuestras palabras curen heridas y abran párpados cerrados. Que vivan para siempre y den brillo a quienes quieran escucharlas.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              marginTop: { xs: 5, md: 5 },
              textAlign: { xs: 'center', md: 'start' },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "10px",
                color: "#9D9D9D",
              }}
            >
              © 2024 Rondo Producciones
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ marginTop: { xs: 5, md: 5 }, textAlign: 'center' }}
          >
            <Typography
              variant="body2"
              sx={{ fontSize: "10px", color: "#9D9D9D", cursor: 'pointer' }}
              onClick={handleOpenModal}
            >
              Aviso de Privacidad
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              marginTop: { xs: 5, md: 5 },
              textAlign: { xs: 'center', md: 'end' },
            }}
          >
            <a
              href="https://amoxtli.tech/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: "10px",
                  color: "#9D9D9D",
                }}
              >
                Desarrollado por Amoxtil Web Developers
              </Typography>
            </a>
          </Grid>
        </Grid>
      </Box>
      {/* Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="aviso-de-privacidad-modal"
        aria-describedby="modal con el aviso de privacidad"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: {
              sx: 200,
              sm: 400,
              md: 400,
              lg: 500,
            },
            maxHeight: '80vh', // Establece la altura máxima del modal
            overflowY: 'auto', // Habilita el desplazamiento vertical
            bgcolor: 'background.paper',
            borderWidth: '0px', // Añade un ancho al borde
            boxShadow: 24,
            p: 4,
            borderRadius: 10,
          }}
        >
          <Typography id="aviso-de-privacidad-modal" variant="h6" component="h2">
            Aviso de Privacidad<br /><br />
          </Typography>
          <Typography variant="body3" component="p">
            Datos personales recabados
          </Typography>
          <Typography variant="body2" component="p">
            Esta política de privacidad pretende detallar las prácticas relativas a la recolección de datos en el Sitio, así como el tipo de información que se recaba de las visitas en el Sitio y los datos que el Titular proporciona de forma volitiva, incluyendo el trato que se le da a esa información, los estándares de seguridad que implican su protección en materia de cumplimiento de las leyes aplicables, las finalidades de su uso y los instrumentos que el Titular puede ejercer para el acceso, rectificación, cancelación u oposición de sus datos recopilados. <br /><br />
            RONDO PRODUCTIONS recaba del Titular, Datos Personales que acrediten su identidad, tales como: Nombre, domicilio, correo electrónico, teléfono, datos demográficos, entre otros datos semejantes.<br /><br />
            RONDO PRODUCTIONS puede recolectar estos datos mediante formularios dedicados a la remisión de información en el Sitio, cuando el Titular lo estime oportuno, podrá registrar voluntariamente su información y datos necesarios cuando pretenda tener contacto directo con RONDO PRODUCTIONS para el objeto que conforme a la solicitud del Titular corresponda y que puede incluir de forma enunciativa mas no limitativa, la consulta relativa a los servicios que se proporcionan a través del Sitio, consultas y avalúos para la prospección comercial de proyectos y/o requerimiento de información concerniente al objeto social de RONDO PRODUCTIOS.<br /><br />
            RONDO PRODUCTIONS puede recolectar estos datos mediante formularios dedicados a la remisión de información en el Sitio, cuando el Titular lo estime oportuno, podrá registrar voluntariamente su información y datos necesarios cuando pretenda tener contacto directo con RONDO PRODUCTIONS para el objeto que conforme a la solicitud del Titular corresponda y que puede incluir de forma enunciativa mas no limitativa, la consulta relativa a los servicios que se proporcionan a través del Sitio, consultas y avalúos para la prospección comercial de proyectos y/o requerimiento de información concerniente al objeto social de RONDO PRODUCTIOS.<br /><br />
            El Titular consiente libre y voluntariamente la transferencia y/o tratamiento de sus Datos Personales a Terceros autorizados al dar de alta su información a través del Sitio.<br /><br />
            Toda información recabada de las visitas al Sitio y/o la proporcionada voluntariamente por el Titular a través de los formularios de registro en el Sitio que contenga Datos Personales identificables a una persona, será amparada por este Aviso de Privacidad sin importar el objeto principal de la intercomunicación, tratándose de cualquier comunicación, material o cualesquiera datos que no incluyan Datos Personales y/o contenga material ilícito, procederá de conformidad con lo establecido en los Términos y Condiciones. En el caso específico de intercomunicaciones que contengan Datos Sensibles, el Responsable y/o sus Encargados limitarán el período de tratamiento de esta información a un mínimo indispensable únicamente para los propósitos legítimos y acordes con las actividades y finalidades de RONDO PRODUCTIONS.<br /><br />
            RONDO PRODUCTIONS al ser una sociedad que cuenta con dominio y Sitio de internet, puede usar una variedad de tecnologías que de forma automática o pasiva recolecta información cuando se visita y/o interactúa con el contenido del presente Sitio, que bien, puede definirse como la información de uso, que incluye;<br /><br />
            -Tipo de navegador<br />
            -Sistema operativo<br />
            -Áreas específicas del sitio web con las que se interactúa, incluyendo el contenido y la hora en que se visita, entre otra información.<br />
            -IP u otros datos de identificación del dispositivo utilizado para acceder al Sitio y su servidor.<br /><br />
          </Typography>
          <Typography variant="body3" component="p">
            Finalidad de datos recabados
          </Typography>
          <Typography variant="body2" component="p">
            RONDO PRODUCTIONS recaba los Datos Personales que el Titular registra de forma pasiva y/o activa en el Sitio con la intención de ofrecerle una versátil interacción con el Sitio, ofrecerle asesoría personalizada en cuanto a sus solicitudes con información actual, disponible y precisa respecto a los servicios que RONDO PRODUCTIONS brinda, así como mantenerle notificado sobre el estatus de sus consultas, proyectos y demás temas relacionados al objeto de la intercomunicación.<br /><br />
            RONDO PRODUCTIONS podrá crear una base de datos que contenga la información de los Titulares con fines de prospección comercial y análisis de estadísticas.<br /><br />
            El Responsable y/o sus Encargados conservarán los datos personales del Titular durante el tiempo que sea necesario para procesar sus solicitudes de información, productos y/o servicios, así como para mantener los registros contables, financieros y de auditoría en términos de la LFPDPPP y de la legislación mercantil, fiscal y administrativa vigente.<br /><br />
            RONDO PRODUCTIONS puede contactar al Titular por motivo de notificaciones relativas a la prestación de servicios, adeudos, cambios en la política de privacidad, así como para ofrecerle, de acuerdo a disponibilidad, acceso a promociones, eventos y/o contenidos exclusivos, entre otras que requieran el conocimiento y/o consentimiento del Titular.<br /><br />
            RONDO PRODUCTIONS podrá interponer restricciones al uso del Sitio, restricciones al tratamiento de Datos o restricciones a los derechos de los Titulares si se incurre en lo conducente a lo descrito en los Términos y Condiciones y las legislaciones aplicables.<br /><br />
            El Titular puede manifestar su negativa o limitación en relación al tratamiento de sus datos personales en cualquier momento, haciendo ejercicio de sus derechos ARCO.<br /><br />
          </Typography>
          <Typography variant="body3" component="p">
            Manejo de los datos recabados
          </Typography>
          <Typography variant="body2" component="p">
            Los Datos Personales recolectados estarán protegidos por medidas de seguridad administrativas, técnicas y físicas adecuadas contra el daño, pérdida, alteración, destrucción o uso, acceso o tratamiento no autorizados, de conformidad con lo dispuesto en la LFPDPPP y las demás legislaciones aplicables. No obstante lo señalado con anterioridad, RONDO PRODUCTIONS no garantiza que terceros no autorizados no puedan tener acceso a los datos, metadatos, sistemas físicos y/o lógicos de sus sistemas de información, así como de los datos de Titulares o del Responsable o los documentos electrónicos y archivos almacenados en sus sistemas debido a vulneraciones y/o ataques cibernéticos. En consecuencia, RONDO PRODUCTIONS no será en ningún caso responsable de los daños y perjuicios que pudieran derivarse de dicho acceso no autorizado.<br /><br />
            El Titular o su representante legal debidamente acreditado podrá limitar el uso o divulgación de sus datos personales a través de los mismos medios y procedimientos dispuestos para el ejercicio de los Derechos ARCO. Si su solicitud resulta procedente, será registrado en el listado de exclusión dispuesto por RONDO PRODUCTIONS para dejar de recibir información relativa al Sitio y sus servicios.<br /><br />
            Asimismo, el Titular de los datos personales tiene en todo momento el derecho de inscribirse en el Registro Público para Evitar Publicidad (REPEP) de la PROFECO http://repep.profeco.gob.mx .<br /><br />
            En caso de que el Titular considere que RONDO PRODUCTIONS ha vulnerado su derecho a la protección de sus datos personales, puede acudir al Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (“INAI”).<br /><br />
          </Typography>
          <Typography variant="body3" component="p">
            Transferencia de datos personales
          </Typography>
          <Typography variant="body2" component="p">
            Con base en el Artículo 37 de la LFPDPPP o en cualquier otro caso de excepción previsto por las legislaciones aplicables, RONDO PRODUCTIONS y/o sus Encargados podrán comunicar los datos personales recolectados a cualquier otra sociedad del mismo grupo empresarial, accionistas, y/o partes relacionadas con las que RONDO PRODUCTIONS ostente vinculaciones jurídicas y/o comerciales, que operen con los mismos procesos, políticas internas para su tratamiento y finalidades. Los receptores autorizados de los datos personales, están obligados por virtud del contrato correspondiente a mantener la confidencialidad de los datos personales suministrados y a observar el presente Aviso de Privacidad.<br /><br />
            RONDO PRODUCTIONS requiere compartir los datos personales del Titular con el objeto de dar cumplimiento a sus obligaciones jurídicas y/o comerciales, para lo cual ha celebrado o celebrará diversos acuerdos comerciales en territorio nacional e internacional.<br /><br />
            Por lo anterior y al aceptar de manera expresa el presente Aviso de Privacidad, el Titular acepta que RONDO PRODUCTIONS podrá transferir a terceros autorizados por el Responsable, Datos Personales recabados a través del Sitio para su uso y almacenamiento exclusivamente para los fines descritos en el presente Aviso de Privacidad, adhiriéndose en el mismo sentido a los Términos y Condiciones del mismo Sitio al hacer uso de este y de los servicios que se proporcionan en el mismo.<br /><br />
          </Typography>
          <Typography variant="body3" component="p">
            Casos de excepción a protección de datos
          </Typography>
          <Typography variant="body2" component="p">
            • Los datos figuren en fuentes de acceso público y sean recopilados con fines estadísticos, históricos o científicos.<br /><br />
            • Cuando exista un impedimento legal, o resolución de una autoridad competente, que restrinja el acceso a los datos personales, o no permita la rectificación, cancelación u oposición de los mismos.<br /><br />
            • Obstaculice actuaciones judiciales o administrativas vinculadas a obligaciones fiscales, la investigación y persecución de delitos o la actualización de sanciones administrativas<br /><br />
            • Obstaculice actuaciones judiciales o administrativas vinculadas a obligaciones fiscales, la investigación y persecución de delitos o la actualización de sanciones administrativas<br /><br />
            • Sean necesarios para realizar una acción en función del interés público<br /><br />
            • Sean objeto de tratamiento para la prevención o para el diagnóstico médico o la gestión de servicios de salud, siempre que dicho tratamiento se realice por un profesional de la salud sujeto a un deber de secreto.<br /><br />
          </Typography>
          <Typography variant="body3" component="p">
            Procedimiento para ejercicio de Derechos ARCO
          </Typography>
          <Typography variant="body2" component="p">
            El Titular o su representante legal debidamente acreditado podrán limitar el uso o divulgación de sus Datos Personales a través de los medios y procedimientos dispuestos para el ejercicio de los Derechos ARCO. Si su solicitud resulta procedente, será registrado en el listado de exclusión dispuesto por RONDO PRODUCTIONS para dejar de recibir información relativa a campañas publicitarias o de mercadotecnia.<br /><br />
            El Titular de los Datos Personales podrá solicitar el ejercicio de los derechos arco de las siguientes formas y conforme al artículo 29 de la LFPDPPP, misma solicitud debe contener:<br /><br />
            I. El nombre del titular y domicilio u otro medio para comunicarle la respuesta a su solicitud; II. Los documentos que acrediten la identidad o, en su caso, la representación legal del titular; III. La descripción clara y precisa de los datos personales respecto de los que se busca ejercer alguno de los derechos antes mencionados, y<br /><br />
            IV. Cualquier otro elemento o documento que facilite la localización de los Datos Personales<br /><br />
          </Typography>
          <Typography variant="body3" component="p">
            Y se puede ejercitar vía:
          </Typography>
          <Typography variant="body2" component="p">
            Correo Electrónico: Deberá enviar la solicitud de ejercicio de Derechos ARCO al correo electrónico info@rondoproductions.com<br /><br />
            Deberá plasmar su Firma Electrónica Avanzada en el correo electrónico para efectos de identificación. *Identificación oficial: Término establecido por la Ley de firma electrónica Avanzada y sus relacionados.<br /><br />
          </Typography>
          <Typography variant="body3" component="p">
            Definiciones:
          </Typography>
          <Typography variant="body2" component="p">
            • Titular.- La persona física a quien identifican o corresponden los datos personales.<br /><br />
            • Datos personales sensibles.- Aquellos datos personales que afecten a la esfera más íntima de su titular, o cuya utilización indebida pueda dar origen a discriminación o conlleve un riesgo grave para éste.<br /><br />
            • Responsable. Persona física o moral (RONDO PRODUCTIONS) de carácter privado que decide sobre el tratamiento de los datos personales.<br /><br />
            • Encargado.- La persona física o moral que sola o conjuntamente con otras trate datos personales por cuenta del responsable.<br /><br />
            • Tratamiento.- La obtención, uso (que incluye el acceso, manejo, aprovechamiento, transferencia o disposición de datos personales), divulgación o almacenamiento de datos personales por cualquier medio.<br /><br />
            • Transferencia.- Toda comunicación de datos realizada a persona distinta del responsable o encargado del tratamiento.<br /><br />
            • Remisión.- La comunicación de datos personales entre el responsable y el encargado, dentro o fuera del territorio mexicano.<br /><br />
            • Derechos ARCO.- Derechos de acceso, rectificación, cancelación y oposición.<br /><br />
          </Typography>
          <Button onClick={handleCloseModal}>Cerrar</Button>
        </Box>
      </Modal>
    </footer>
  );
};

export default Footer;
