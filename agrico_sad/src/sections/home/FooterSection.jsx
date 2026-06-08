import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GiPlantsAndAnimals } from 'react-icons/gi';

function FooterSection() {
  return (
    <footer className="bg-gray-900 py-12 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <GiPlantsAndAnimals className="text-2xl text-emerald-500" />
              <span className="text-lg font-bold text-white">AgroClima</span>
            </div>
            <p className="text-xs">
              Sistema de apoio a decisao para agricultura resiliente ao clima e
              a pragas.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Produto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="transition text-xs hover:text-white" href="#demonstracao">
                  Simulador
                </a>
              </li>
              <li>
                <a className=" text-xs transition hover:text-white" href="#recursos">
                  Recursos
                </a>
              </li>
              <li>
                <a className="text-xs transition hover:text-white" href="#contato">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Operacao</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-xs transition hover:text-white" href="/login">
                  Aceder ao painel
                </a>
              </li>
              <li>
                <a className="text-xs transition hover:text-white" href="#como-funciona">
                  Fluxo tecnico
                </a>
              </li>
              <li>
                <a className=" text-xs transition hover:text-white" href="#recursos">
                  Capacidades
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3  text-sm font-semibold text-white">Redes</h4>
            <div className="flex gap-4 text-xl">
              <FaGithub className="cursor-pointer transition hover:text-white" />
              <FaTwitter className="cursor-pointer transition hover:text-white" />
              <FaLinkedin className="cursor-pointer transition hover:text-white" />
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-2xs">
          &copy; 2026 AgroClima SAD. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
