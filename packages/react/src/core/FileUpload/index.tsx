import { Button } from '../Button'
import { IconButton } from '../IconButton'
import { Text } from '../Text'
import { Badge } from '../Badge'
import {
  ClipboardClose,
  ClipboardTick,
  Danger,
  ExportSquare,
  Receipt1,
  Trash
} from 'iconsax-react'
import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { DropZoneContainer, OptionalBadge } from './styles'
import DocViewer, { MSDocRenderer } from 'react-doc-viewer'
import ReactFileViewer from 'react-file-viewer'

interface IAcceptedFiles {
  [key: string]: string[]
}

interface ISupportedFiles {
  [key: string]: {
    [key: string]: string[]
  }
}

const defaultSupportedFiles: ISupportedFiles = {
  pdf: {
    'application/pdf': ['.pdf']
  },
  jpeg: {
    'image/jpeg': ['.jpeg', '.jpg']
  },
  png: {
    'image/png': ['.png']
  },
  docx: {
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [
      '.docx'
    ]
  },
  doc: {
    'application/msword': ['.doc']
  }
}

type SupportedFilesKeys = keyof typeof defaultSupportedFiles

export interface FileUploadProps {
  file?: File | string
  error?: string
  disabled?: boolean
  onChangeFile?: (file?: File) => void
  label?: string
  optional?: boolean
  supportedFiles?: SupportedFilesKeys[]
}

export const FileUpload = ({
  error,
  file,
  disabled,
  onChangeFile,
  label = 'Arquivo da Guia',
  optional = false,
  supportedFiles = ['png', 'docx', 'pdf']
}: FileUploadProps) => {
  let acceptedFileExtensions: IAcceptedFiles = {}

  supportedFiles.forEach((extension) => {
    const filteredDefaultSupportedFiles = Object.keys(
      defaultSupportedFiles
    ).filter(
      (defaultSupportedFilesExt) => defaultSupportedFilesExt === extension
    )[0]

    const supportedFilesSelectedByUser =
      defaultSupportedFiles[filteredDefaultSupportedFiles as SupportedFilesKeys]

    acceptedFileExtensions = {
      ...acceptedFileExtensions,
      ...supportedFilesSelectedByUser
    }
  })

  const acceptedFileExtensionsCSV = '.' + supportedFiles.join(', .')

  const {
    isDragActive,
    isDragAccept,
    isDragReject,
    getRootProps,
    getInputProps
  } = useDropzone({
    onDropAccepted,
    accept: acceptedFileExtensions
  })

  const [attachedFile, setAttachedFile] = useState<File | string | null>(null)

  const isAttachedFileInstanceOfFile = attachedFile instanceof File

  const fileUrl = isAttachedFileInstanceOfFile
    ? URL.createObjectURL(attachedFile)
    : attachedFile

  const fileType = isAttachedFileInstanceOfFile
    ? attachedFile.type
    : 'application/pdf'

  const isWordFile =
    isAttachedFileInstanceOfFile &&
    attachedFile.type ===
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

  const handleFileChange = async (file: File) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setDocumentUri(reader.result as string)
      console.log(reader.result)
    }

    // const file = event.target.files[0];

    // Ler o arquivo .docx como um blob
    // const reader = new FileReader()
    // reader.onload = async (e) => {
    //   const arrayBuffer = e.target && e.target.result
    //   if (arrayBuffer && typeof arrayBuffer !== 'string') {
    //     console.log('FileReader')

    //     const buffer = new Uint8Array(arrayBuffer)
    //     const blob = new Blob([buffer], {
    //       type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    //     })
    //     // Converter o blob em URL de objeto
    //     const url = URL.createObjectURL(blob)
    //     // Abrir o URL em uma nova janela
    //     window.open(url, '_blank')
    //   }
    // }
    // reader.readAsArrayBuffer(file)
  }

  console.log('fileUrl', fileUrl)

  function onDropAccepted(acceptedFiles: File[]) {
    if (onChangeFile) onChangeFile(acceptedFiles[0])
    setAttachedFile(acceptedFiles[0])
    // handleFileChange(acceptedFiles[0])
  }

  function removeFile() {
    if (onChangeFile) onChangeFile(undefined)
    setAttachedFile(null)
  }

  function handleViewFile() {
    if (fileUrl) {
      window.open(fileUrl, '_blank')
    }
  }

  useEffect(() => {
    if (file && disabled) {
      setAttachedFile(file)
    }
  }, [file, disabled])

  return (
    <div
      className={`flex flex-col p-5 rounded ${error ? 'bg-assistant-red-light' : 'bg-grey-100'
        }`}
    >
      <header className="flex items-center mb-4">
        <div className="flex justify-start items-center gap-2">
          <Text size="xs" weight="bold">
            {label}
          </Text>
          {optional && <OptionalBadge>Opcional</OptionalBadge>}
        </div>
        {disabled && (
          <Button
            size="sm"
            color="default"
            variant="text"
            type="button"
            endIcon={<ExportSquare />}
            className="ml-auto"
            onClick={handleViewFile}
          >
            Visualizar arquivo
          </Button>
        )}
        {!disabled && (
          <div className="ml-auto flex items-center">
            {file && (
              <IconButton
                size="sm"
                variant="text"
                color="default"
                type="button"
                onClick={removeFile}
              >
                <Trash />
              </IconButton>
            )}
            <IconButton
              size="sm"
              variant="text"
              color="default"
              type="button"
              onClick={handleViewFile}
            >
              <ExportSquare />
            </IconButton>
          </div>
        )}
      </header>
      <div className="flex-1">
        {!fileUrl && (
          <DropZoneContainer
            isDragAccept={isDragAccept}
            isDragReject={isDragReject}
            {...getRootProps()}
          >
            <input {...getInputProps()} disabled={disabled} />
            {isDragActive && isDragAccept && (
              <>
                <ClipboardTick size={24} className="text-assistant-blue-main" />
                <Text size="sm" color="assistant-blue-main">
                  Solte o arquivo <Text>e aguarde carregar</Text>
                </Text>
              </>
            )}

            {isDragActive && isDragReject && (
              <>
                <ClipboardClose size={24} className="text-assistant-red-main" />
                <Text size="sm" color="assistant-red-main">
                  Arquivo não suportado
                </Text>
              </>
            )}

            {!isDragActive && (
              <>
                <Receipt1 size={24} />
                <Text size="sm">
                  Arrate o arquivo ou{' '}
                  <Text color="assistant-blue-main">
                    clique aqui para carregar
                  </Text>
                </Text>
                <Text size="xs" color="grey-700">
                  Arquivo suportados: {acceptedFileExtensionsCSV}
                </Text>
              </>
            )}
          </DropZoneContainer>
        )}
        {fileUrl && !isWordFile && (
          <embed
            src={fileUrl}
            type={fileType}
            className="w-full min-h-[200px] rounded-lg"
          />
        )}
        {fileUrl && isWordFile && (
          <>
            <DocViewer
              documents={[
                { uri: URL.createObjectURL(attachedFile), fileType: 'docx' }
              ]}
              pluginRenderers={[MSDocRenderer]}
            />
            <embed
              src={fileUrl}
              type={fileType}
              className="w-full min-h-[200px] rounded-lg"
            />
          </>
        )}
      </div>
      {error && (
        <footer className="text-assistant-red-main flex items-center gap-2 mt-2">
          <Danger size={16} />
          <Text size="xs">{error}</Text>
        </footer>
      )}
    </div>
  )
}
